import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {id, name, img, description, price, supplier, book} = product; 
    const navigate = useNavigate()
    const navigateToProductDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
        <div className='mt-2'>
        <h2>name: {name}</h2>
            <p>Price: {price}</p>
            <p>Supplier: {supplier}</p>
            <p><small>{description}</small></p>
            <button onClick={() =>navigateToProductDetail(id)} className='book m-2'>{book}</button>
        </div>
        </div>
    );
};

export default Product;