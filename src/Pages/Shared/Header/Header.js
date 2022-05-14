import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <>
<Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" className='fs-5' variant="dark">
  <Container>
  <Navbar.Brand className='navStyle' as={Link} to="/"><span>Laptop Shop</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav className='navLink'>
    <Nav.Link as={Link} to="home">Home</Nav.Link>
    <Nav.Link as={Link} to="allProduct">All Product</Nav.Link>
    <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
    <Nav.Link as={Link} to="login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
};

export default Header;