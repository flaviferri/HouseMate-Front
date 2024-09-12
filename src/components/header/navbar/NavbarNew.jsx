import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {IoHomeOutline} from "react-icons/io5";
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {CiLogin} from "react-icons/ci";


const NavbarNew = () => {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <IoHomeOutline className="icono-Home"/>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                {/*<Form className="d-flex justify-content-end">*/}
                {/*    <Form.Control*/}
                {/*        type="search"*/}
                {/*        placeholder="Search"*/}
                {/*        className="me-2"*/}
                {/*        aria-label="Search"*/}
                {/*    />*/}
                {/*    <Button variant="outline-success">Search</Button>*/}
                {/*</Form>*/}
                <Navbar.Brand href="#" className="justify-content-end" to={"/register"}>
                    <CiLogin className="login-icon" id={"logout-icon"}/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default NavbarNew