import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
  const [user] = useAuthState(auth);


  const handleSignOut = () =>{
    signOut(auth)
}
   

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
    <Nav.Link className='mt-2' as={Link} to="home">Home</Nav.Link>
    <Nav.Link className='mt-2' as={Link} to="allProduct">All Product</Nav.Link>
    <Nav.Link className='mt-2' as={Link} to="blogs">Blogs</Nav.Link>
  
   { 
   user ?
  
 
   <Link className='sign mt-3' to="/login" onClick={handleSignOut}>Log Out</Link>

    

 
   :
   <Nav.Link className='mt-2' as={Link} to="login">Login</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
};

export default Header;