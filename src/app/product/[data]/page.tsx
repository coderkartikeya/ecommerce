'use client'
import React, { useEffect, useState } from 'react'
import Taskbar from '../../components/Taskbar'
import { useSearchParams } from 'next/navigation'
// import { useRouter } from 'next/router'


const data = () => {
  const [data,setData]=useState([]);
  const searchParams=useSearchParams();
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ category: searchParams.get('category') }),
        });
        const result = await res.json();
        setData(result.category)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();

    
  }, []);
  console.log(searchParams.get('category'))

  
  
  
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