import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';




const ProductsDetails = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='product-title mt-5'>Our Products</h1>
            <div className='container'>
            {
                products.map(product => <ProductDetails
                key={product.id}
                product={product}
                
                ></ProductDetails>)
            }
            </div>
            <div className='text-center'>
                <button className='mt-5 seeAllBtn'>See all</button>
            </div>
        </div>
    );
};

export default ProductsDetails;