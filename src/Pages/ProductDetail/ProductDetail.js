import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'


const ProductDetail = () => {
    const {productId} = useParams()
    return (
        <div>
            <h2>Welcome to detail: {productId}</h2>
            <Link to="/checkout">
            <button className='checkoutBtn mt-3' type="submit">
             confirm booking
           </button>
            </Link>
        </div>
    );
};

export default ProductDetail;