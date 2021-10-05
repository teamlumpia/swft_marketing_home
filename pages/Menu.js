import React from 'react';
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'; 
import styles from "../styles/Home.module.scss";
import Home from './Home';

const Menu = (props) => {
    return (
        <div>
            <div className={styles.menu} >
                <Navbar bg="none" expand="lg" fixed="top" className="p-3">      
                        <Navbar.Brand className={styles.navbar} href="#home">LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className={styles.menu_header}>
                        <Nav className={styles.link_font_size}>
                            <Nav.Link href="#home" className="p-4">Home</Nav.Link>
                            <Nav.Link href="#link" className="p-4">Login</Nav.Link>
                            <Nav.Link href="#link" className="p-4">Services</Nav.Link>
                            <Nav.Link href="#link" className="p-4">About Us</Nav.Link>
                            <Nav.Link href="#link" className="p-4">Contact Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
            <div id="home"><Home /></div>
        </div>
    );
}

export default Menu;