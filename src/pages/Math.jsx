import React, { useState } from 'react';
import MathJax from 'react-mathjax2';
import { Link } from 'react-router-dom';
import Progressbar from '../component/Progressbar';

const mathCard = [
  {
    ascii :'5 \\times \\frac{1}{2}',
    title: 'Arithmetic',
    subTitle: 'Introductory'
  },
  {
    ascii :'3x + 5 = 4',
    title: 'Basic Algebra',
    subTitle: 'Foundational'
  },
  {
    ascii :'x = (-b ± √(b^2 - 4ac)) / (2a)',
    title: 'Intermediate Algebra',
    subTitle: 'Intermediate'
  },
  {
    ascii : '\\int_{0}^{L} x^2 dx = ?',
    title: 'Calculus',
    subTitle: 'Advanced'
  },
]

function Math() {

  const [select, setSelect] = useState('')

  return (
    <>
    <Progressbar filled="40" back={true}/>
    <div className='items-center justify-center sm:h-[80vh] h-auto w-full py-4 px-4 flex flex-col space-y-6'>
      <h1 className='font-bold text-3xl text-center'>What is your math comfort level?</h1>
      <h3 className='text-gray-600 text-sm text-center'>Choose the highest level you feel confident in - you can always adjust later</h3>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[60%] mt-4'>
      {
        mathCard.map((item) => (
          <div
           onClick={() => setSelect(item.title)}
           className={`border hover:border-yellow-400 hover:shadow-lg hover:backdrop-blur-md px-6 py-6 space-y-2 rounded-md justify-center text-center items-center flex flex-col ${select === item.title? 'border-yellow-400 shadow-lg backdrop-blur-md' : 'border'}`}>
          <div className='items-center justify-center flex flex-grow'>
          <MathJax.Context input='ascii'>
                <MathJax.Node inline>{ item.ascii }</MathJax.Node>
          </MathJax.Context>
          </div>
          <div className='flex flex-col justify-end flex-grow gap-1'>
            <p className='font-medium text-black'>{item.title}</p>
            <p className='text-gray-400'>{item.subTitle}</p>
          </div>
          </div>
        ))
      }
      </div>
      <Link to='/way' className="text-white bg-black rounded-md items-center justify-center px-9 shadow-md py-2 text-sm">Continue</Link>
    </div>
    </>
  )
}

export default Math