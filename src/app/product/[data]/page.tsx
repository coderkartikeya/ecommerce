'use client'
import React, { useEffect, useState } from 'react'
import Taskbar from '../../components/Taskbar'
import { useSearchParams } from 'next/navigation'


const data = () => {
  const [data,getData]=useState([]);
  const searchParams=useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageSize] = useState(10); // Adjust page size if needed
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ page: parseInt(page, 10), pageSize }),
        });
        const result = await res.json();
        setProducts(result.data);
        setTotal(result.total);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (page) {
      fetchData();
    }
  }, [page, pageSize]);
  const totalPages = Math.ceil(total / pageSize);

  
  
  
  return (
    <div className='w-full h-full flex flex-col bg-slate-100'>
      <Taskbar />
      
      <div className='flex p-10 flex-col' >
        <h1 className='md:text-4xl text-2xl bg-white p-4 rounded-md'>Trending lol </h1>
        {/* <h1>Products Page {page}</h1> */}
        <ul>
        
      </ul>


      </div>

    </div>
  )
}

export default data