import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
    }


    if(user){
        navigate('/home');
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile'); 
        navigate('/home');
    }

    return (
           <div>
                <div className='py-20 md:flex justify-center items-center'>
            <div className='w-[20] md:ml-auto mx-auto md:w-96 py-10 px-10 from shadow-xl'>
            <h2 className='font-bold text-4xl text-center loginFont
        '>Please Register</h2>
            <form onSubmit={handleRegister} className='mt-4'>
              
            <label className='fw-bold'>User name</label><br />
                <input className='mb-3 inputPass' type="text" name="name" id="" placeholder='Your name' required/>
                
                <label className='fw-bold'>Email address</label><br />
                <input className='mb-3 inputPass' type="email" name="email" id="" placeholder='Email Address' required/>
                

                <label className='fw-bold'>Password</label><br />
                <input className='mb-3 inputPass' type="password" name="password" id="" placeholder='Password' required/>
               
                <button className='registerBtn mt-3' type="submit">
            Register
           </button>
            
            </form>
            <p className=' mt-3'>Already Registered? <Link to="/login" className='text-primary pe-auto text-decoration-none fw-bold' onClick={navigateLogin}>Login</Link> </p>
        </div>
 </div>
 <div>
     <SocialLogin></SocialLogin>
 </div>
           </div>
    );
};

export default Register;