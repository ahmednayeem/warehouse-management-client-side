import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'


const ProductDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    
    useEffect( () => {
        const url = `https://sleepy-inlet-97088.herokuapp.com/product/${productId}`

        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data))
    }, [])


    return (
             <div className='productDetail mt-5'>
            <img src={product.img} alt="" />
           <div className='mt-2'>
          <h2>name: {product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Supplier: {product.supplier}</p>
            <p><small>{product.description}</small></p>
            </div>
            <Link to="/">
            <button className='checkoutBtn mt-3' type="submit">
            Delivered
           </button>
            </Link>
        </div>
    );
};

export default ProductDetail;