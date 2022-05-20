import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Products.css';


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='product-title mt-5'>Our Products</h1>
            <div className='container'>
            {
                products.map(product => <Product
                key={product._id}
                product={product}
                
                ></Product>)
            }
            </div>
            <div className='text-center'>
               <Link to='/inventory'> <button className='mt-5 seeAllBtn'>See all</button></Link>
            </div>
        </div>
    );
};

export default Products;