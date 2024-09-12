import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "../components/buttons/Buttons.jsx";

import ButtonReact from "react-bootstrap/Button";

import {Link} from "react-router-dom";
import React, {useState} from "react";
import {ButtonGroup, Col, Container, Row} from "react-bootstrap";
import ButtonBootstrap from "react-bootstrap/Button";
import SimpleModalMessage from "../components/modals/SimpleModalMessage.jsx";


const RegisterNew = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birth_day, setBirth_day] = useState("");
    const [departure_day, setDeparture_day] = useState("");

    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [birth_dayError, setBirth_dayError] = useState(false);
    const [departure_dayError, setDeparture_dayError] = useState(false);

    const [popUpMessage, setPopUpMessage] = useState("");
    const [popUpFunction, setPopUpFunction] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [loading, setLoading] = useState(false);

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
        console.log(e.target.value)
        if (e.target.value) {
            setBirth_dayError(false);
        }
    }

    function handleDeparture_day(e) {
        setDeparture_day(e.target.value);
        console.log(e.target.value)
        if (e.target.value) {
            setDeparture_dayError(false);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!name || !lastName|| !email || !password|| !birth_day ) {
            setNameError(!name);
            setLastNameError(!lastName);
            setEmailError(!email);
            setPasswordError(!password);
            setBirth_dayError(!birth_day);
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
                    body: JSON.stringify({ name, lastName, email, password , birth_day,departure_day: departure_day || null
                    }),
                }
            );

            if (!response.ok) {
                setPopUpMessage(`Error, we cannot register the user `);
                setPopUpFunction(() => reloadPage);
                setIsPopupOpen(true);
            }else{
                setPopUpMessage(`Great!! Your user has been registered. You can sigIn now :)`);
                console.log (`Great!! Your user has been registered. You can sigIn now :)`)
                setPopUpFunction(() => navigateLogin());
            }
        } catch {
            setPopUpMessage(`Error, we cannot register the user `);
            setPopUpFunction(() => reloadPage);
            console.log (`Problem with the registration`)
            setIsPopupOpen(true);
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
        <main className="d-flex align-items-center full-height">
            <main className="form-signin w-100 m-auto">
                <Form
                    onSubmit={handleSubmit}
                >
                    <Image src="/assets/file.jpg"/>
                    <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
                    <Form.Group className="mb-3" controlId="loginform.ControlName">
                        <Form.Label
                            id={"label.name"}>
                            Name:
                        </Form.Label>
                        <Form.Control
                            value={name}
                            type="text"
                            placeholder="Michelle"
                            className="without-radius"
                            onChange={handleName}
                        />
                        {nameError && (
                            <p className="text-danger">This field is mandatory!</p>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginform.ControlLastName">
                        <Form.Label
                            id={"label.last_name"}>
                            Last Name:
                        </Form.Label>
                        <Form.Control
                            value={lastName}
                            type="text"
                            placeholder="Smith"
                            className="without-radius"
                            onChange={handleLastName}
                        />
                        {lastNameError && (
                            <p className="text-danger">This field is mandatory!</p>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginform.ControlEmail">
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

                    <Form.Group className="mb-3" controlId="loginform.ControlBirthdayDay">
                        <Form.Label id={"label.birth_day"}>Birthday date:</Form.Label>
                        <Form.Control
                            value={birth_day}
                            type="date"
                            placeholder="1/1/2024"
                            className="without-radius"
                            onChange={handleBirth_day}
                        />
                        {birth_dayError && (
                            <p className="text-danger">Hey hey!! Do not forget the password</p>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginform.ControlDepartureDay">
                        <Form.Label id={"label.departure_date"}>Departing date:</Form.Label>
                        <Form.Control
                            value={departure_day}
                            type="date"
                            placeholder="1/1/2024"
                            className="without-radius"
                            onChange={handleDeparture_day}
                        />
                        {departure_dayError && (
                            <p className="text-danger">Hey hey!! Do not forget the password</p>
                        )}
                    </Form.Group>

                    <ButtonGroup className="full-width">
                        <Button
                            className={`btn btn-primary w-100 py-2 without-radius ${loading ? "opacity-50" : ""}`}
                            text={loading ? "Loading..." : "Sign up"}
                            type="submit"
                            disabled={loading}
                            onClick={() => {
                                // setModalShow(true)
                            }}
                        />
                        <a
                            className={`btn btn-light w-100 py-2 without-radius ${loading ? "opacity-50" : ""}`}
                            href="/login"
                        >Cancel</a>
                    </ButtonGroup>

                </Form>
                <br/>
                <div className="d-flex justify-content-center">
                    <p className="text-body-secondary">
                        you already have an account? <Link href="#" className="text-reset" to={"/login"}>Sign In</Link>.
                    </p>
                </div>
            </main>
            <SimpleModalMessage
                show={isPopupOpen}
                onHide={() => {
                    setIsPopupOpen(false);
                    popUpFunction
                }}
                text={popUpMessage}
            />
        </main>
    );
}

export default RegisterNew;