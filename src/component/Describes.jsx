import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Describes = ({title, subTitle, list, route}) => {

  const [select, setSelect] = useState('');

  return (
    <div className='items-center h-screen w-full py-[50px] px-4 flex flex-col space-y-6'>
      <h1 className='font-bold text-3xl text-center'>{title}</h1>
      <h3 className='text-gray-600 text-sm'>{subTitle}</h3>
      <div className='w-full items-center flex flex-col space-y-2 py-4'>
      {list.map((item, index)=> 
        <div 
          key={index} 
          className={`border sm:w-[40%] w-[90%] hover:border-yellow-400 hover:shadow-lg hover:backdrop-blur-md px-4 py-2 rounded-md flex items-center gap-3 ${select === item.type? 'border-yellow-400 shadow-lg backdrop-blur-md' : 'border-gray-200 '}`}
          onClick={() => setSelect(item.type)}
          >
        <img src={item.icon} alt='student' className='w-10 h-10'/>
        <p className='text-gray-400 text-sm'><span className='text-black'>{item.type}</span> {item.title}</p>
      </div>)}
      </div>
      <Link to={select !== ''? route : null} className={`text-white ${select === ''? "bg-gray-200" : "bg-black"} rounded-md items-center justify-center px-9 shadow-md py-2 text-sm`}>Continue</Link>
    </div>
  )
}

export default Describes;
