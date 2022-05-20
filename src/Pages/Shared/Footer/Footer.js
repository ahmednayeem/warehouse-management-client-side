import React from 'react';
import "./Footer.css"

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
    
     
    

         
 <div>


<footer class=" text-center  mainFooter">
 
  <div class="px-5 py-16">
 
    <div class="row px px-5 py-16 ">
  
      <div class="footerP col-lg-6 col-md-12 mb-4 mb-md-0 mx-auto">
        <h5 class="text-uppercase text-4xl mb-3">Laptop Shop</h5>

        <p className='text-xl'>
        The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook. In 2015, new MacBooks featured Apple's Retina Display and higher resolutions.
        </p>
      </div>
   
    </div>
  
  </div>


  <div class="text-center px-5 py-4 footerStyle">
  <p>Copyright {year} <i className="fa-solid fa-copyright"></i> Laptop Store. All Right Reserved</p>
  </div>
 
</footer>
 </div>
    
      
    );
};

export default Footer;