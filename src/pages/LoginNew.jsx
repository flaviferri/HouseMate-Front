import SimpleModalMessage from "../components/modals/SimpleModalMessage.jsx";
import Button from "../components/buttons/Buttons"
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import React, {useState} from "react";

import {Link, useNavigate} from "react-router-dom";


function LoginNew() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [popUpMessage, setPopUpMessage] = useState("");
    const [popUpFunction, setPopUpFunction] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [sucessfully, setSucessfully] = useState(false);

    const navigate = useNavigate();

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
                body: JSON.stringify({email, password}),
            });

            if (!response.ok) {
                setPopUpMessage("Error! Usuario o contraseña incorrectos.");
                setSucessfully(false)
                setIsPopupOpen(true);
            } else {
                const data = await response.json();
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('user', data.user.id);
                localStorage.setItem('firstName', data.user.name);
                localStorage.setItem('lastName', data.user.latname);
                setPopUpMessage(`Bienvenid@ de nuevo ${data.user.name}`);
                setSucessfully(true)
                setIsPopupOpen(true);
            }
        } catch {
            setPopUpMessage("Error! Usuario o contraseña incorrectos.");
            setSucessfully(false)
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
        console.log("isPopupOpen: " + isPopupOpen)
        if (isPopupOpen) setIsPopupOpen(false);
        window.location.reload();
    };


    return (
        <main className="d-flex align-items-center full-height">
            <main className="form-signin w-100 m-auto">
                <Form
                    onSubmit={handleSubmit}>
                    <Image src="/assets/file.jpg"/>
                    <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>
                    <Form.Group className="mb-3">
                        <Form.Label id={"label.email"}>Email address</Form.Label>
                        <Form.Control
                            value={email}
                            type="email"
                            placeholder="name@example.com"
                            className="without-radius"
                            onChange={handleEmail}
                        />
                        {emailError && (
                            <p className="text-danger">You have to write an email</p>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginform.ControlPassword">
                        <Form.Label id={"label.password"}>Password</Form.Label>
                        <Form.Control
                            value={password}
                            type="password"
                            placeholder="Password"
                            className="without-radius"
                            onChange={handlePassword}
                        />
                        {passwordError && (
                            <p className="text-danger">Hey hey!! Do not forget the password</p>
                        )}
                    </Form.Group>
                    <Button
                        className={`btn btn-primary w-100 py-2 without-radius ${loading ? "opacity-50" : ""}`}
                        text={loading ? "Loading..." : "Sign In"}
                        type="submit"
                        disabled={loading}
                        onClick={() => {
                            // setModalShow(true)
                        }}
                    />
                </Form>
                <br/>
                <div className="d-flex justify-content-center">
                    <p className="text-body-secondary">
                        Don't you have and account? <Link href="#" className="text-reset" to={"/register"}>Sign Up</Link>.
                    </p>
                </div>
            </main>
            <SimpleModalMessage
                show={isPopupOpen}
                onHide={() => {
                    setIsPopupOpen(false);
                    if(sucessfully){
                        navigate("/")
                    }
                }}
                text={popUpMessage}
            />
        </main>
    );
}

export default LoginNew;