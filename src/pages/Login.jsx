import { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/buttons/Buttons"
import { useNavigate } from "react-router-dom";
import Popup from "../components/popUp/popUp";

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
        setPopUpMessage("Error, usuario o contraseña incorrectos.");
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
        setPopUpMessage("Error, usuario o contraseña incorrectos.");
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
    <div className="flex flex-row justify-center w-[auto] py-2">
      <section className="w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
        <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">User Accest</h1>
        <hr className="w-[100%] size-2 border-pink"/>
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
