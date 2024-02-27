import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../stylesheets/header-nav.css'
import { localStorageUtil } from '../../util';
import { NavDropdown, Row, Col, Container, Button, Navbar, Nav } from 'react-bootstrap';
import profileIcon from '../../assets/profile.png';
import logo from '../../assets/logo.png';

function CommonNavbar() {
  const user = localStorageUtil.getItem('user');
  const navigate = useNavigate();

  // Comment this code (just for testing)
  const login = () => {
    localStorageUtil.setItem('user', { "name": "xyz", "role": "admin" })
  }

  const logout = () => {
    localStorageUtil.removeItem('user');
    navigate("/login")
  }

  return (
    <Navbar expand="lg" className="top-nav" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Book Stack
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/books">Books</Nav.Link>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                { user ? <Nav.Link href="/adminLateFeeSystemSearch">Late Fee System</Nav.Link> : <></> }
                { user ? 
                    <Nav.Link href="/manage-books">Book Management</Nav.Link> : <></> }
                {
                    user ?
                    <NavDropdown className="ms-auto"
                        title="Sam" 
                        id="basic-nav-dropdown">
                        <NavDropdown.Item href="#profile">
                            <Row>
                                <Col xs={3}>
                                    <img src={profileIcon} alt=""/>
                                </Col>
                                <Col xs={6}>
                                    <Row>Sam</Row>
                                    <Row>sam@dal.ca</Row>
                                </Col>
                            </Row>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#profile">Profile Settings</NavDropdown.Item>
                        <NavDropdown.Item href="/manage-books">
                            Book Management
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#dark-mode">Dark Mode</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => logout()}>
                            Signout
                        </NavDropdown.Item>
                    </NavDropdown> :
                    <Container className='authentication-buttons'>
                        <Button className="btn login" onClick={() => login()}>Login</Button>
                        <Button className="btn signup" variant='outline-primary'>Sign Up</Button>
                    </Container>
                }
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}

export default CommonNavbar;