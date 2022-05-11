import React from 'react';
import './Banner.css'


const Banner = () => {
    return (
        <div className='home'>
        <div className='overlay'>
        <div className='content'>
           <h1 className='p-3'>You're here for a laptop!!! </h1> 
           <p>A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently.</p>
           <div>
           <button className='viewAllBtn mx-3 mt-2'>View All</button>
           </div>
         </div>
         </div>
         </div>
        
    );
};

export default Banner;