import { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/buttons/Buttons"
import { Link , useNavigate } from "react-router-dom";
import Popup from "../components/popUp/PopUp";
import "./login.scss"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ loading, setLoading ] = useState( false );
  const [popUpMessage, setPopUpMessage] = useState("");
  const [popUpFunction, setPopUpFunction] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const navigate = useNavigate();
  const closePopup = () => setIsPopupOpen(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value) {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (!email) {
      setEmailError("You have to write an email ");
      hasError = true;
    }

    if (!password) {
      setPasswordError("hey hey !! Don't forget the password");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setPopUpMessage("Error, incorrect username or password.");
        setPopUpFunction(() => reloadPage);
        setIsPopupOpen(true);
      }

      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', data.user.id);
      setPopUpMessage(
        `Bienvenid@ de nuevo ${data.user.name}`
      );
      setPopUpFunction(() => navigateHome);
      setIsPopupOpen(true);

    } catch {
        setPopUpMessage("Error, incorrect username or password.");
        setPopUpFunction(() => reloadPage);
        setIsPopupOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const navigateHome = () => {
    if (isPopupOpen) setIsPopupOpen(false);
    navigate("/");
    window.location.reload();
};

const reloadPage = () => {
    if (isPopupOpen) setIsPopupOpen(false);
    window.location.reload();
};

  return (

    <div className="nav-item-container">
      <section className="section-custom">
        <h1 className="text-custom">User Accest</h1>
        <hr className="element-custom"/>
        <form onSubmit={handleSubmit} >
          <Input 
            title="E-mail" 
            placeholder="Write a valid email..." 
            type="email"
            value={email}
            onChange={handleEmail}
          />
          {emailError && (
            <p className="text-pink text-sm pl-3">You have to write an email</p>
          )}

          <Input
            title="Password"
            placeholder="Write a password."
            type="password"
            value={password}
            onChange={handlePassword}
          />
          {passwordError && (
            <p className="text-pink text-sm pl-3">hey hey !! Do not forget the password</p>
          )}

          <div className="flex flex-row justify-center py-1">
            <Button
              className={`bg-green ${loading ? "opacity-50" : ""}`}
              text={loading ? "Cargando..." : "Aceptar"}
              type="submit"
              disabled={loading}
            />
            <Button
              className="bg-pink"
              text="Cancelar"
              type="button"
              onClick={() => {
                navigate("/");
              }}
              
            />
              <h2 className="font-bold text-blue text-center">
                Don't you have and account ?? Sing in !!!  Access{" "}
                    <Link to="/register" className="text">
                        Here
                    </Link>
                </h2>
          </div>
        </form>
      </section>
      <Popup
                isPopupOpen={isPopupOpen}
                closePopup={closePopup}
                onConfirm={popUpFunction}
                message={popUpMessage}
                showCancel={false}
            />
    </div>
  );
};

export default Login;