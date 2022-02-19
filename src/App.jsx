import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Nav, Navbar } from 'react-bootstrap'
import logo from "./logo.svg"

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand>
                    <img src={logo} width="40px" height="40px" />
                    Logo Vite
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="Product">Product</Nav.Link>
                    <Nav.Link href="Contact">Contact</Nav.Link>
                    <Nav.Link href="About">About</Nav.Link>
                </Nav>
            </Navbar>
            <div className="content">this is content</div>
        </>
    );
}

export default App;
