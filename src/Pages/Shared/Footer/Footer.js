import React from 'react';
import "./Footer.css"

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
    
           <footer class="mainFooter text-center text-lg-start">

  <div class="container p-4">
 
    <div class=" row">
    
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Footer text</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
          aliquam voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
  
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Footer text</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
          aliquam voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
    
    </div>
   
  </div>



  <div class="text-center p-3 footerStyle">
  <p>Copyright {year} <i className="fa-solid fa-copyright"></i> Laptop Store. All Right Reserved</p>
  </div>


        </footer>
    );
};

export default Footer;