import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
<div>
<Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" className='fs-5' variant="dark">
  <Container>
  <Navbar.Brand className='navStyle' as={Link} to="/"><span>Laptop Shop</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavLink className='mt-2' as={Link} to="home">Home</NavLink>
    <NavLink className='mt-2' as={Link} to="inventory">All Product</NavLink>
    <NavLink className='mt-2' as={Link} to="blogs">Blogs</NavLink>
    </Nav>
    <Nav className='navLink'>
  
   { 
   user ?
  



 <div className='mt-2'>

<Link className='' to="/login" activeClassName="active" onClick={handleSignOut}>My Item</Link>

<Link className='' to="/login" activeClassName="active" onClick={handleSignOut}>Add Item</Link>
     
     <Link className='' to="/login" activeClassName="active" onClick={handleSignOut}>Log Out</Link>
 </div>

   :
   <NavLink className='' as={Link} to="login">Login</NavLink>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
      </>
    );
};

export default Header;