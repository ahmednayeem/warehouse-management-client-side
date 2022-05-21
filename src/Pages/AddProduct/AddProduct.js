import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `https://sleepy-inlet-97088.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
<div>
    <div className='py-20 md:flex justify-center items-center'>
    <div className='w-[20] md:ml-auto mx-auto md:w-96 py-10 px-10 from shadow-xl addForm'>
            <h2 className='fw-bold text-4xl text-center loginFont'>Add  Product</h2>
            <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
               
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Supplier' type="text" {...register("supplier")} />

                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                <textarea className='mb-3 w-100' placeholder='Description' {...register("description")} />
           
             <input className='deliveredBtn' type="submit" value="Submit" />
           
                
            </form>
        </div>
    </div>
</div>
    );
};

export default AddProduct;