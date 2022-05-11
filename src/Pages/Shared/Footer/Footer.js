import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='mt-5'>
            <p>Copyright {year} <i class="fa-solid fa-copyright"></i> Laptop Store. All Right Reserved</p>
        </footer>
    );
};

export default Footer;