import React from 'react';

import Banner from '../Banner/Banner';

import Comment from '../Comment/Comment';
import NewProduct from '../NewProduct/NewProduct';

import Products from '../Products/Products';



const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Products></Products>
           <NewProduct></NewProduct>
           <Comment></Comment>
           
        </div>
    );
};

export default Home;