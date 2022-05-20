import React from 'react';
import useProducts from '../../hooks/useProducts';
import './ManageProduct.css'

const ManageProduct = () => {
    const [products, setProducts] = useProducts();


    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url =  `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !==id);
                setProducts(remaining)
            })
        }
    }
    return (
        <div className='manage shadow-xl'>
          
            <h2 className='font-bold text-4xl text-center loginFont' >Manage Product</h2>
            {
                products.map(product => <div key={product._id}>
                    <h4 className='mt-3 fw-bold mb-2'>{product.name}</h4>
                    <button onClick={() => handleDelete(product._id)} className='manageBtn'>
                        X
                    </button>

                </div>)
            }
        </div>
    );
};

export default ManageProduct;