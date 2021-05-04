import Logo from '../../src/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap'

export default function Navb() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="home" as={Link}> Home </Nav.Link>
                        <Nav.Link to="noticias" as={Link}> Noticias </Nav.Link>
                    </Nav>
                    <Button as={NavLink} to="login">Login</Button>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
