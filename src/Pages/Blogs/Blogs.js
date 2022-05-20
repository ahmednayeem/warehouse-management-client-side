import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
       <div className='container mx-auto grid lg:grid-cols-2 xl:grid-cols-3 px-8  gap-10 my-20'>
            <div className='blogColor shadow-xl pb-10 lg:w-[400px] md:w-[450px]'>
          <div className=' p-5 text-center' >
              <h1 className='text-xl font-semibold'>Questions 1: Difference between javascript and nodejs</h1>
              <p>Ans: JavaScript is a programming language.It runs in browser. Browser must need javascript engine to run javascript code. On the other hand Node js is a running environment for JS. We Need to use nodejs for run js code in machine.</p>
          </div>
        </div>

        <div class="blogColor shadow-xl pb-10 lg:w-[400px] md:w-[450px]">



<div class=" p-5 text-center">

<h3 class="blogColor text-xl font-semibold ">Ques: When should you use nodejs and when should you use mongodb</h3>

<p class="text-[17px] py-3">Ans: Node js is interpreter for javascript, We can run javascript code by node js. On the other hand, MongoDB is a Database. IT's a no sql database. We use mongoDB to store real time data and then we can manage data and they will save in database safely.</p>

</div>
</div>
<div class="blogColor shadow-xl pb-10 lg:w-[400px] md:w-[450px]">


<div class=" p-5 text-center">
<h3 class="text-xl font-semibold ">Ques: Differences between sql and nosql databases.</h3>
<p class="text-[17px] py-3">Ans: SQL is a Structured Query Language. They are vertically scalable. On the other hand, NoSQL is horizontally scalable. SQL is more structured then NoSQL database. NoSQL database is more easy to manage. 
</p>
</div>
</div>
       </div>
    );
};

export default Blogs;