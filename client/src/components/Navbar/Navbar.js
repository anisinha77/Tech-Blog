import React from 'react'
import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../Images/brand.jpg'
import { Link } from 'react-router-dom'

const HeaderNavbar = () => {
    const user = true;
    return (
        <div className="headerNav">
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                    <Link className="to-link" to="/">
                        <Navbar.Brand href="#home" className="nav-brand">
                            <img className="brandImg" src={logo} alt="logo" />
                            <span className="brandName">TECH WORLD</span>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav style={{ margin: "auto" }}>
                            <Link className="to-link" to='/'>
                                <Nav.Link href="#home" style={{ padding: "10px" }}>HOME</Nav.Link>
                            </Link>
                            <Link className="to-link" to='/about'>
                                <Nav.Link href="#home" style={{ padding: "10px" }}>ABOUT</Nav.Link>
                            </Link>
                            <Link className="to-link" to="/contact">
                                <Nav.Link href="#home" style={{ padding: "10px" }}>CONTACT</Nav.Link>
                            </Link>
                            <Link className="to-link" to="/create">
                                <Nav.Link href="#home" style={{ padding: "10px" }}>CREATE</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav style={{ marginLeft: "auto" }}>
                            <Nav.Link href="#home"><i className="fas fa-search"></i></Nav.Link>
                            {user === false && <Link className="to-link" to="/login"><Nav.Link href="#home">LOGIN</Nav.Link></Link>}
                            {user === false && <Link className="to-link" to="/register"><Nav.Link href="#home">REGISTER</Nav.Link></Link>}
                            {user && <Link className="to-link" to="/"><Nav.Link href="#home">LOGOUT</Nav.Link></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderNavbar