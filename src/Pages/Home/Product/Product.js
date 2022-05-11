import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name, img, description, price, supplier, book} = product; 
    return (
        <div className='product'>
            <img src={img} alt="" />
        <div className='mt-2'>
        <h2>name: {name}</h2>
            <p>Price: {price}</p>
            <p>Supplier: {supplier}</p>
            <p><small>{description}</small></p>
            <button className='book m-2'>{book}</button>
        </div>
        </div>
    );
};

export default Product;