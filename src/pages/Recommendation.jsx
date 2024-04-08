import React, { useState } from 'react';
import { Machine } from '../assets';
import Lottie from 'lottie-react';
import load from '../assets/loading.json'

function Recommendation() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading((loading) => !loading);
  }, 2000);


  if (loading) {
    return <div className='items-center justify-center h-screen w-full py-4 px-4 flex flex-col space-y-6'>
       <Lottie animationData={load} className='w-[5%]'/>
       <h2 className='font-bold text-center'>Finding learning path recommendations for you based on <br /> your responses.</h2>
    </div>
  } else {
  return (
    <div className='items-center justify-center h-screen w-full py-4 px-4 flex flex-col space-y-6'>
      <h1 className='font-bold text-3xl text-center'>Learning paths based on your answers</h1>
      <h3 className='text-gray-600 text-sm'>Choose one to get started. You can switch anytime.</h3>
      <div className='flex flex-col sm:flex-row gap-2'>
      <div className='border border-gray-200 px-4 py-5 rounded-md flex gap-2 relative'>
      <button className='absolute -top-2.5 left-1/2 rounded-full bg-yellow-500 text-black text-[10px] py-1 px-3 font-bold'>MOST POPULAR</button>
         <p className='text-sm font-medium'>
          <span className='font-bold'>Foundational Math</span> build <br />
          your foundational skills in <br />
          algebra, geometry, and <br />
          probabilty
         </p>
         <img className='w-20 h-20 object-contain' src={Machine} alt='machine'/>
      </div>
      <div className='border border-gray-200 px-4 py-5 rounded-md flex gap-2'>
         <p className='text-sm font-medium'>
          <span className='font-bold'>Mathematical Thinking</span> <br />
          Build your foundational skills in <br />
          algebra, geometry, <br /> and probabilty
         </p>
         <img className='w-20 h-20 object-contain' src={Machine} alt='machine'/>
      </div>
      </div>
    </div>
  )
}
}

export default Recommendation;