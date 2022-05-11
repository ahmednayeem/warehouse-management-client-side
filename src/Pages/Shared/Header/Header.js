import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" className='fs-5' variant="dark">
  <Container>
  <Navbar.Brand className='navStyle' href="#home"><span>Laptop Shop</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav className='navLink'>
    <Nav.Link href="#features">Home</Nav.Link>
    <Nav.Link href="#pricing">Blogs</Nav.Link>
      <Nav.Link href="#login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
};

export default Header;