import React from 'react';
import notfound from  '../../../images/404.jpg'


const NotFound = () => {
    return (
        <div>
         <img className='w-100' style={{height: '92vh'}} src= {notfound} alt="" />
        </div>
    );
};

export default NotFound;