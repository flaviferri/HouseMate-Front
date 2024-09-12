import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoHomeOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

const NavbarNew = () => {
    const [userName, setUserName] = useState(""); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedName = localStorage.getItem("firstName");  

        if (storedName) {
            setUserName(storedName);  
        }
    }, []);

    const handleHomeClick = () => {
        navigate("/login");  
    };

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
                    <IoHomeOutline className="icono-Home" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{userName ? userName : "Loading..."}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Brand href="#" className="justify-content-end" to={"/register"}>
                    <CiLogin className="login-icon" id={"logout-icon"} />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarNew;