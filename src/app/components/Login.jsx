'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Login = () => {
    const [username,getUsername]=useState();
    const [password,getPassword]=useState();
    const router=useRouter();

    const login=()=>{
        if(username=='kartikeya' && password=='1234'){
            router.push('/main')
        }
        // router.push('/main')
    }

  return (
    <div className='h-full w-full flex flex-col '>
        <div className='w-full md:h-full h-full rounded-10 z-10 relative'>
            <Image src={`https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} width={600} height={700}
            className='h-full w-full bg-cover' alt='image'
            />
            <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center border-10 border-white flex-col gap-10'>
                <h1 className='md:text-6xl text-5xl text-white font-bold shadow-md p-5'>E-Cart</h1>
                <div className='flex flex-col justify-center items-center h-2/3 w-1/2  border-40 border-slate-300 md:shadow-md md:shadow-white rounded-md'>
                    <h1 className='md:text-8xl text-6xl font-bold text-white text-center p-5'>Login</h1>
                    <div className='p-10'>
                    <div className='flex flex-col  '>
                        <div>
                            <h2 className='text-xl font-bold text-white '>UserName</h2>

                        </div>
                        
                        <input type="text" placeholder='Username' className='border-2 border-slate-
                        300 rounded-md p-2 md:w-full m-2 active:outline-none focus:outline-none' onChange={(e)=>{getUsername(e.target.value)}} />
                    </div>
                    <div className='flex flex-col '>
                        <div>
                            <h2 className='text-xl font-bold text-white '>Password</h2>

                        </div>
                        <div className='rounded-10'>
                            <input type="password" placeholder='Password' className=' p-2 md:w-full m-2 rounded-md focus:outline-none'
                            onChange={(e)=>{getPassword(e.target.value)}}
                            />

                        </div>
                        
                        
                    </div>

                    </div>
                    <div className='flex justify-bewteen lg:justify-around gap-10  '>
                        <button className='bg-blue-500 text-white rounded-md p-3 m-2 hover:bg-sky-500 shadow-md shadow-white' onClick={login}>Login
                            </button>
                        <button className='bg-blue-500 text-white rounded-md p-3 m-2 hover:bg-sky-500 shadow-md shadow-white'>Register
                            </button>

                    </div>
                    


                </div>
                
                

            </div>
        </div>
    </div>
  )
}

export default Login
