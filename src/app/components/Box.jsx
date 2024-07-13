'use client'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import Image from 'next/image';

{/* <RxCross2 /> */}


const Box = ({ d, visible,setVisible }) => {
    const [show, setShow] = useState(visible);
    
  return (
    <div className='fixed z-20 h-full w-full flex justify-center items-center'>
        
        <div className='bg-white md:h-2/3 md:w-2/3 h-2/3 w-[90%] shadow shadow-md flex items-center p-5 flex-col gap-4'>

            <div className='flex flex-row-reverse w-full'>
                <button className='text-xl' onClick={()=>setVisible(false)}>
                <RxCross2/>

                </button>
                
            </div>
            <div>
                <h1 className='md:text-xl text-md font-bold'>{d.title}</h1>
            </div>
            <div className=' flex md:flex-row flex-row gap-4 '>
            <Image src={d.image} height={200} width={200} className='md:w-[200px] w-[100px] h-[100px] md:h-[300px]'/>
            <div className='flex flex-col gap-4'>
                {d.features ?d.features.map((e)=><p className='text-slate-600 text-sm'>. {e}</p>):<></>}
            </div>
            </div>

        </div>
        

    
    </div>
  )
}

export default Box