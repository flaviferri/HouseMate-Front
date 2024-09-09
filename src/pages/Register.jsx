import { useState } from "react";
import Button from "../components/buttons/Buttons"
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input/Input";
import Popup from "../components/popUp/PopUp";

const SignIn = () => {
    const [name, setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birth_day,setBirth_day] = useState("");
    const [departure_day,setDeparture_day] = useState("");



    const [nameError, setNameError] = useState(false);
    const [lastNameError,  setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [birth_dayError,setBirth_dayError]= useState(false);
    const [departure_dayError,setDeparture_dayError]= useState(false);
    const [popUpMessage, setPopUpMessage] = useState("");
    const [popUpFunction, setPopUpFunction] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const navigate = useNavigate();

    const closePopup = () => setIsPopupOpen(false);

    function handleName(e) {
        setName(e.target.value);
        if (e.target.value) {
            setNameError(false);
        }
    }

    function handleLastName(e) {
      setLastName(e.target.value);
      if (e.target.value) {
          setLastNameError(false);
      }
  }

    function handleEmail(e) {
        setEmail(e.target.value);
        if (e.target.value) {
            setEmailError(false);
        }
    }

    function handlePassword(e) {
        setPassword(e.target.value);
        if (e.target.value) {
            setPasswordError(false);
        }
    }

    function handleBirth_day(e) {
      setBirth_day(e.target.value);
      if (e.target.value) {
          setBirth_dayError(false);
      }
  }
    function handleDeparture_day(e) {
    setDeparture_day(e.target.value);
    if (e.target.value) {
        setDeparture_dayError(false);
    }
}

    async function handleSubmit(e) {
        e.preventDefault();

        if (!name || !lastName|| !email || !password|| !birth_day || !departure_day) {
          setNameError(!name);
          setLastNameError(!lastName);
          setEmailError(!email);
          setPasswordError(!password);
          setBirth_dayError(!birth_day);
          setDeparture_dayError(!departure_day);
          return;
        }

        try {
            const response = await fetch(
                "http://localhost:4001/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, lastName, email, password , birth_day,departure_day}),
                }
            );

            if (!response.ok) {
                setPopUpMessage(`Error, we cannot register the user `);
                setPopUpFunction(() => reloadPage);
          
            }

            setPopUpMessage(
                `Great!! Your user has been registered. You can sigIn now :)`
            );
            console.log (`Great!! Your user has been registered. You can sigIn now :)`)

          navigateLogin();
          
        } catch {
            setPopUpMessage(`Error, we cannot register the user `);
            setPopUpFunction(() => reloadPage);
      
        }
    }

    const navigateLogin = () => {
        navigate("/login");
    };

    const reloadPage = () => {
        if (isPopupOpen) setIsPopupOpen(false);
        window.location.reload();
    };

    return (
        <div className="flex flex-row justify-center w-[auto] py-2">
            <section className="w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
                <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">
                User Registration
                </h1>
                <hr className="w-[100%] size-2 border-pink" />
                <form action="" onSubmit={handleSubmit}>
                    <Input
                        title="Name"
                        placeholder="Write your name..."
                        type="text"
                        value={name}
                        onChange={handleName}
                    />
                    {nameError && (
                        <p className="text-pink text-sm pl-3">
                        Name requiered
                        </p>
                    )}
                    <Input
                      title="Last Name"
                      placeholder="Write your last name ..."
                      type="text"
                      value={lastName}
                      onChange={handleLastName}
                  />
                  {lastNameError && (
                      <p className="text-pink text-sm pl-3">
                          Nombre requerido
                      </p>
                  )}
                  <Input
                        title="E-mail"
                        placeholder="Write a valid email..."
                        type="email"
                        value={email}
                        onChange={handleEmail}
                    />
                    {emailError && (
                        <p className="text-pink text-sm pl-3">
                            Email requerido
                        </p>
                    )}
                    <Input
                        title="Password"
                        placeholder="Write a password ..."
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    {passwordError && (
                        <p className="text-pink text-sm pl-3">
                            password requiered                       
                            </p>
                    )}
                    <Input
                      title="Birthday date "
                      placeholder="Write your birthday ..."
                      type="text"
                      value={birth_day}
                      onChange={handleBirth_day}
                  />
                  {birth_dayError && (
                      <p className="text-pink text-sm pl-3">
                          Birth day requiered
                      </p>
                  )}
                  <Input
                      title="Departing date  "
                      placeholder="write it only if you know it..."
                      type="text"
                      value={departure_day}
                      onChange={handleDeparture_day}
                  />

                    <div className="flex flex-row justify-center py-1">
                        <Button
                            className="bg-green"
                            text="Aceptar"
                            type="submit"

                        />
                        <Button
                            className="bg-pink"
                            text="Cancelar"
                            onClick={() => {
                                navigate("/");
                            }}
                        />
                    </div>
                </form>
                <h2 className="font-bold text-blue text-center">
                Do you already have an account? Access{" "}
                    <Link to="/login" className="text-green hover:text-blue">
                        Here
                    </Link>
                </h2>
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

export default SignIn;
