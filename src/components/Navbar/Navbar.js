import React from 'react'
import './Navbar.css'
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap'
import logo from '../Images/brand.jpg'

const HeaderNavbar = () => {
    return (
        <div className="headerNav">
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home" className="nav-brand">
                        <img className="brandImg" src={logo} alt="logo" />
                        <span className="brandName">TECH WORLD</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ margin: "auto" }}>
                            <Nav.Link href="#home" style={{ padding: "10px" }}>HOME</Nav.Link>
                            <Nav.Link href="#link" style={{ padding: "10px" }}>ABOUT</Nav.Link>
                            <Nav.Link href="#link" style={{ padding: "10px" }}>CONTACT</Nav.Link>
                            <Nav.Link href="#link" style={{ padding: "10px" }}>CREATE</Nav.Link>
                        </Nav>
                        <Nav style={{ marginLeft: "auto" }}>
                            <Nav.Link href="#home"><i class="fas fa-search"></i></Nav.Link>
                            <Nav.Link href="#home">LOGIN</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default HeaderNavbar
