import React, { useState } from 'react';
import { Ghost } from '../assets';
import { Link } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import Progressbar from '../component/Progressbar';

function Way() {
  
  return (
    <>
    <Progressbar filled="100" back={true}/>
    <div className='items-center justify-center sm:h-[90vh] h-auto w-full py-4 px-4 flex flex-col space-y-6'>
       <div className='flex sm:flex-row flex-col items-center px-[20px] w-[70%] justify-between gap-6'>
        <img src={Ghost} alt='weight' className='w-[300px] h-auto'/>
        <div className='sm:w-[50%] w-full'>
            <h1 className='font-bold text-3xl'>You're on your way</h1>
            <div className='flex mt-6'>
            <IoStar className='text-yellow-500 text-lg gap-2'/>
            <IoStar className='text-yellow-500 text-lg gap-2'/>
            <IoStar className='text-yellow-500 text-lg gap-2'/>
            <IoStar className='text-yellow-500 text-lg gap-2'/>
            <IoStar className='text-yellow-500 text-lg gap-2'/>
            </div>
            <p className='text-justify text-lg italic mt-2'>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggles to understand. I now feel confident approaching both technical job interviews and real world problem solving situations"</p>
            <p className='italic font-medium mt-6'>- Jacob S.</p>
        </div>
       </div>
       <Link  
         to='/recommendation'
         className="text-white bg-black rounded-md items-center justify-center px-9 shadow-md py-2 text-sm">Continue</Link>
    </div>
    </>
  )
}

export default Way