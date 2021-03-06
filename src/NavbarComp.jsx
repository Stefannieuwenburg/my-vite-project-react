import  React  from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NavbarComp.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  logo  from "./logo.svg";
import  About from "./components/About";
import  Contact from "./components/Contact";
import  Home  from "./components/Home";

function NavbarComp() {
    return (
        <BrowserRouter>
            <div className="NavbarComp">
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <Navbar.Brand>
                                Logo{" "}
                                <img src={logo} width="40px" height="40px" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">
                                        Home
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="About">
                                        About
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="Contact">
                                        Contact
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
        
    );
}

export default NavbarComp;
