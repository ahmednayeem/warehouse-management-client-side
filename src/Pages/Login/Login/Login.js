import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
    

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
 
  
  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password)
    
}


    if(user){
    navigate('/home')
    }
   


  const navigateRegister = event => {
        navigate('/register');
     }
  
  return (
       <div className='py-20 md:flex justify-center items-center'>
            <div className=' w-[20] md:ml-auto mx-auto md:w-96 py-10 px-10 from shadow-xl'>
            <h2 className='font-bold text-4xl text-center loginFont
            '>Please login</h2>
<div>
<Form onSubmit={handleSubmit} className='mt-4'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fw-bold'>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='fw-bold'>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <button className='submitBtn mt-3' type="submit">
    Submit
  </button>
</Form>
<p className='mt-3 fs-5'>New here? <Link to="/register" className='text-primary' onClick={navigateRegister}>Sign up</Link></p>
</div>
        </div>
       </div>
    );
};

export default Login;