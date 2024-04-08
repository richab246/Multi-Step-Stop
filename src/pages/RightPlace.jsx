import React from 'react';
import { Weight } from '../assets';
import { Link } from 'react-router-dom';
import Progressbar from '../component/Progressbar';

function RightPlace() {
  return (
    <>
    <Progressbar filled="30" back={true}/>
    <div className='items-center justify-center sm:h-[90vh] h-auto w-full py-4 px-4 flex flex-col space-y-6'>
       <div className='flex sm:flex-row flex-col items-center px-[20px] w-[70%] justify-between gap-6'>
        <img src={Weight} alt='weight' className='w-[300px] h-auto'/>
        <div className='space-y-6 sm:w-[50%] w-full'>
            <h1 className='font-bold text-3xl'>You're in the right place</h1>
            <p className='text-justify text-lg'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
        </div>
       </div>
       <Link to='/math' className="text-white bg-black rounded-md items-center justify-center px-9 shadow-md py-2 text-sm">Continue</Link>
    </div>
    </>
  )
}

export default RightPlace