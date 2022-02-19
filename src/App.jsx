import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} width="40px" height="40px" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="Home">Home</Nav.Link>
                            <Nav.Link href="About">About</Nav.Link>
                            <Nav.Link href="Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default App;
