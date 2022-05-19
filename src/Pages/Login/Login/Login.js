import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
    
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
 
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password)
    
}

if(loading || sending){
  return <Loading></Loading>
}


    if(user){
      navigate(from, { replace: true})
    }

    if (error) {
      errorElement=
          <p className='text-danger text-center fw-bold'>Error: {error?.message}
          </p>
      
    }
   


  const navigateRegister = event => {
        navigate('/register');
     }

     const resetPassword = async() => {
      const email = emailRef.current.value;
       if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
         toast('please enter your email address');
       }
     }
  
 
 
 return (
<div>
  <div>
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
{errorElement}
<p className='mt-3'>New here? <Link to="/register" className='text-primary fw-bold' onClick={navigateRegister}>Sign up</Link></p>

<p className='mt-3'>Forget Password? <button className='text-decoration-none text-red-700 fw-bold' onClick={resetPassword}>Reset Password</button></p>
</div>

        </div>
       </div>
  </div>
  <div>
<SocialLogin></SocialLogin>
<ToastContainer />
  </div>
</div>
       
    );
};

export default Login;