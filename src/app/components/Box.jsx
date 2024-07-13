'use client';
import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';

const Box = ({ d, visible, setVisible }) => {
    const [show, setShow] = useState(visible);

    useEffect(() => {
        setShow(visible);
    }, [visible]);

    if (!show) return null;

    return (
        <div className='fixed z-20 h-full w-full flex justify-center items-center bg-black bg-opacity-50'>
            <div className='bg-white md:h-2/3 md:w-2/3 h-2/3 w-[90%] shadow-md flex items-center p-5 flex-col gap-4'>
                <div className='flex flex-row-reverse w-full'>
                    <button className='text-xl' onClick={() => setVisible(false)}>
                        <RxCross2 />
                    </button>
                </div>
                {d.map((item, index) => (
                    <div key={index}>
                        <h1 className='md:text-xl text-md font-bold'>{item.title}</h1>
                        <div className='flex md:flex-row flex-row gap-4'>
                            <Image src={item.image} height={200} width={200} alt='product' className='md:w-[200px] w-[100px] h-[100px] md:h-[300px]' />
                            <div className='flex flex-col gap-4'>
                                {item.features ? item.features.map((feature, idx) => (
                                    <p className='text-slate-600 text-sm' key={idx}>• {feature}</p>
                                )) : null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Box;
