import React from 'react';
import './Inventory.css'
import { Link} from 'react-router-dom';



const Inventory = () => {
    return (
      <div>

<div>
           <div>
           <h1 className='product-title mt-2 mx-auto w-50'>All product</h1>
           <button className='addBtn'>
           <i class="fa-solid fa-plus mx-1"></i>
               Add product</button>
           </div>
            <div className="w-50 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
                <table className="w-full text-sm">
                    <thead className="text-xs  uppercase  bg-color">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-white">Product name</th>
                            <th scope="col" className="px-6 py-3 text-white">Image</th>
                            <th scope="col" className="px-6 py-3 text-white">Product details</th>
                            <th scope="col" className="px-6 py-3 text-white">Quantity</th>
                            <th scope="col" className="px-6 py-3 text-white">Price</th>
                            <th scope="col" className="px-6 py-3 text-white">Supplier</th>
                            <th scope="col" className="px-6 py-3 text-white">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 background">

                            <td className='px-6 py-4'>Apple MacBook Pro M1</td>
                            
                           
                            <td className="px-6 py-4">
                                <img width="70" src="https://mcsolution.com.bd/wp-content/uploads/2021/11/macbook-pro-m1-max-customize-model-1.webp" alt="" />
                            </td>
                            <td className="px-6 py-4">Apple MacBook Pro M1 Max 16 inch</td>
                            <td className="px-6 py-4">4</td>
                            <td className="px-6 py-4">$1000</td>
                            <td className="px-6 py-4">ahmed</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <button title="view" className="mr-1 text-xl cursor-pointer">
                                   <Link to="/checkout">
                                   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" className="svg-inline--fa fa-eye w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                                   </Link>
                                    </button>
                                   
                         
                           
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800">
                        <td className='px-6 py-4'>MacBook Pro 14‑inch</td>
                            
                        <td className="px-6 py-4">
                            <img width="70" src="https://mcsolution.com.bd/wp-content/uploads/2021/05/macbook-pro-m1-pro-.webp" alt="" />
                        </td>
                        <td className="px-6 py-4">MacBook Pro 14‑inch M1 Max</td>
                        <td className="px-6 py-4">49</td>
                        <td className="px-6 py-4">$2000</td>
                        <td className="px-6 py-4">ahmed</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <button >
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" className="svg-inline--fa fa-eye w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                                </button>
                      
                    
                            </div>
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800">
                        <td className='px-6 py-4'>Apple MacBook Pro M1</td>
                            
                            <td className="px-6 py-4">
                            <img width="70" src="https://mcsolution.com.bd/wp-content/uploads/2021/10/macbook-pro-m1-pro-.webp" alt="" />
                        </td>
                            <td className="px-6 py-4">Apple MacBook Pro M1 Pro Chip 16.2</td>
                            <td className="px-6 py-4">20</td>
                            <td className="px-6 py-4">$3000</td>
                            <td className="px-6 py-4">ahmed</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <button>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" className="svg-inline--fa fa-eye w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                                    </button>
                    
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800">
                        <td className='px-6 py-4'>MacBook Pro 14</td>
                            
                            <td className="px-6 py-4">
                                <img width="70" src="https://mcsolution.com.bd/wp-content/uploads/2021/11/macbook-pro-m1-max-customize-model-1.webp" alt="" /></td>
                            <td className="px-6 py-4">Apple MacBook Pro M1 Pro 14-inch</td>
                            <td className="px-6 py-4">50</td>
                            <td className="px-6 py-4">$1200</td>
                            <td className="px-6 py-4">ahmed</td>
                            <td className="px-6 py-4"><div className="flex items-center">
                                <button>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" className="svg-inline--fa fa-eye w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                                 
                                        </button>
                       
                            </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800">
                        <td className='px-6 py-4'>MacBook Pro 16 inch</td>
                            
                            <td className="px-6 py-4">
                            <img width="70" src="https://mcsolution.com.bd/wp-content/uploads/2021/10/apple-macbook-pro-m1-pro-price-in-bangladesh-2021.webp" alt="" />
                        </td>
                            <td className="px-6 py-4">Apple MacBook Pro 16 inch M1 Pro</td>
                            <td className="px-6 py-4">10</td>
                            <td className="px-6 py-4">$1800</td>
                            <td className="px-6 py-4">ahmed</td>
                            <td className="px-6 py-4"><div className="flex items-center">
                                <button>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" className="svg-inline--fa fa-eye w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                                    </button>
                              
                      
                            </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800">
                        <td className='px-6 py-4'>MacBook Pro M1 Max 14</td>
                            
                            <td className="px-6 py-4">
                                <img width="70" src="https://mcsolution.com.bd/wp-content/uploads/2021/11/macbook-pro-m1-max-14-inch-price-in-bangladesh.webp" alt="" />
                            </td>
                            <td className="px-6 py-4">Apple MacBook Pro M1 Max 14 inch</td>
                            <td className="px-6 py-4">5</td>
                            <td className="px-6 py-4">$1500</td>
                            <td className="px-6 py-4">ahmed</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <button >
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" className="svg-inline--fa fa-eye w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                                    </button>
                    
                        
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table></div>
        </div>
      </div>
    );
};

export default Inventory;