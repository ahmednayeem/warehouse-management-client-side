import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css'
import Loading from '../../Shared/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement=
            <p className='text-danger text-center fw-bold'>Error: {error?.message}  {error1?.message}
            </p>
        
      }

      if(user || user1){
        navigate('/home')
    }

   
    return (
        <div className='margin'>
            {errorElement}
        <button onClick={() => signInWithGoogle()} className='socialButton'>
        <i class="fa-brands fa-google color"></i>
        Google
        </button>
      
        <button onClick={() => signInWithGithub()} className='socialButton bg-black mt-3'>
        <i class="fa-brands fa-github color"></i>
        Github
        </button>
      
        </div>
        
    );
};

export default SocialLogin;