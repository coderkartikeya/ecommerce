'use client'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const Taskbar = () => {
  const[pressed,getPressed]=useState(false);
  
  return (
    <div>
    <div className='bg-white h-[70px] m-2 flex justify-between items-center px-4 md:px-8'>
      <h1 className='font-bold md:text-4xl text-xl'>E-Cart</h1>
      <div className='flex items-center bg-sky-100 p-2 rounded-md md:w-1/3 w-1/2'>
        <CiSearch className='text-xl md:text-2xl' />
        <input 
          type="text" 
          className='bg-sky-100 focus:outline-none p-1 text-base md:text-xl w-full' 
          placeholder='Search Items' 
        />
      </div>
      <div className='flex gap-3 md:gap-5 items-center hidden md:flex '>
        <Link href={`#`}>
          <FaCartArrowDown className='text-2xl md:text-3xl hover:bg-slate-100 p-1 rounded-full' />
        </Link>
        <Link href={`#`}>
          <h1 className='text-sm md:text-base hover:bg-slate-100 p-1 md:p-2 rounded'>About us</h1>
        </Link>
        <Link href={`#`}>
          <h1 className='text-sm md:text-base hover:bg-slate-100 p-1 md:p-2 rounded'>Contact us</h1>
        </Link>
        <Link href={`/`}>
          <h1 className='text-sm md:text-base hover:bg-slate-100 p-1 md:p-2 rounded'>Logout</h1>
        </Link>
      </div>
      <div className='md:hidden flex'>
        <button onClick={()=>{getPressed(!pressed)}}>
          {pressed?<RxCross2 />: <RxHamburgerMenu />}
      
        </button>

      </div>
      

    </div>
    {pressed ?<div className=''>
      <div className='flex gap-3 md:gap-5 items-center  md:flex p-5 justify-center'>
      <Link href={`#`}>
          <FaCartArrowDown className='text-4xl md:text-3xl hover:bg-sky-100 p-2 rounded-full bg-white ' />
        </Link>
        
        <Link href={`#`}>
          <h1 className='text-sm md:text-base hover:bg-sky-100 p-1 md:p-2 rounded-sm bg-white p-3'>About us</h1>
        </Link>
        <Link href={`#`}>
          <h1 className='text-sm md:text-base hover:bg-sky-100 p-1 md:p-2 rounded-sm bg-white p-3'>Contact us</h1>
        </Link>
        <Link href={`/`}>
          <h1 className='text-sm md:text-base hover:bg-sky-100 p-1 md:p-2 rounded-sm bg-white p-3'>Logout</h1>
        </Link>
      </div>
      
      </div>:
      <div className='hidden'></div>}
    </div>
  )
}

export default Taskbar
