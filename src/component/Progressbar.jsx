import React from 'react';
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Progressbar({filled, back}) {

  const navigate = useNavigate();
	
  return (
	  <div className='items-center justify-center px-10 mt-10 flex flex-row gap-2'>
        {back ? <IoChevronBackOutline className='cursor-pointer' onClick={() => navigate(-1)}/> : null}
		  <div className='overflow-hidden relative w-[80%] h-1 rounded-full bg-[#e5e5e5]'>
			  <div className={`h-[100%] bg-[#359a80]`} style={{ width: `${filled}%` }}></div>
		  </div>
	</div>
  )
}