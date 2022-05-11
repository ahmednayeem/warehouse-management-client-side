import React from 'react';
import Comment from '../Comment/Comment';
import NewProduct from '../NewProduct/NewProduct';

import Products from '../Products/Products';



const Home = () => {
    return (
        <div>
            <Products></Products>
           <NewProduct></NewProduct>
           <Comment></Comment>
        </div>
    );
};

export default Home;