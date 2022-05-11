import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='product-title'>Our Products</h1>
            <div className='container'>
            {
                products.map(product => <Product
                key={product.id}
                product={product}
                
                ></Product>)
            }
            </div>
            <div className='text-center'>
                <button className='mt-5 seeAll'>See all</button>
            </div>
        </div>
    );
};

export default Products;