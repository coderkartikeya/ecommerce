import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dropdown } from 'react-bootstrap'
const Categories = () => {
  return (
    <div className=' p-2 m-3 h-[120px] flex justify-around bg-white flex items-center'>
        <Link href={{
            pathname: '/product',
            query: { category: 'Mobile Phones' }
        }}>
            <div className='flex flex-col hover:shadow-md hover:shadow-bg-slate-100 items-center rounded-md p-2'>
                <Image src={`/mobile.png`} height={70} width={70} className="xs:w-[30px] xs:h-[30px]" alt='image'/>
                <h1>Mobile Phones</h1>

            </div>
            
        </Link>
        <Link href={`#`}>
        <div className='flex flex-col hover:shadow-md hover:shadow-bg-slate-100 items-center rounded-md p-2 xs:w-[30px] xs:h-[30px]'>
                <Image src={`/tvs.jpeg`} height={70} width={70} className="xs:w-[50px] xs:h-[50px]" alt='image'/>
                <h1>Televisions</h1>

            </div>
        </Link>
        <Link href={`#`}>
        <div className='flex flex-col hover:shadow-md hover:shadow-bg-slate-100 items-center rounded-md p-2'>
                <Image src={`/food.jpeg`} height={70} width={70} className="xs:w-[50px] xs:h-[50px]" alt='image'/>
                <h1>Food</h1>

            </div>
        </Link>
        
        <Link href={`#`}>
        <div className='flex flex-col hover:shadow-md hover:shadow-bg-slate-100 items-center rounded-md p-2'>
                <Image src={`/mens.png`} height={46} width={50} className="xs:w-[50px] xs:h-[50px]" alt='image'/>
                <h1>Clothes</h1>

            </div>

        </Link>
    </div>
  )
}

export default Categories