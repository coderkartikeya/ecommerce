'use client'
import React, { useEffect, useState } from 'react'
import Taskbar from '../components/Taskbar'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Box from '../components/Box'

interface Item {
  id: number;
  title: string;
  details: string;
  image: string;
  price: number;
}

const data = () => {
  const [data,setData]=useState<Item[]>([]);
  const searchParams=useSearchParams();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [visible,setVisible]=useState(false);
  const [pop,setPop]=useState<Item[]>([])

  
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
        
        setData(result.result)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();

    
  }, []);
  

  
  
  
  return (
    <div>
      {visible?<Box d={pop} visible={visible} setVisible={setVisible}/>:<></>}
    <div className={`w-full h-full flex flex-col bg-slate-100 ${visible? 'blur-sm':''}`}> 

      <Taskbar />
      
      <div className='flex p-10 flex-col' >
        <h1 className='md:text-4xl text-2xl bg-white p-4 rounded-md'>Trending products </h1>
        
      </div>
      
      <div>
        <button className='p-2 text-center mx-10 bg-black text-white text-xl rounded rounded-md' onClick={()=>router.back()}>Back</button>
        {loading ? (
          <div className='flex justify-center items-center h-full w-full'>Loading...</div>
          ) : (
            
            <div className='grid md:grid-cols-3 grid-cols-1  gap-10 p-10 '>
              {data.map((item:Item,index:number) => (
                <button onClick={()=> {
                  setVisible(true);
                  setPop(item);
                }}>
                <div className='flex flex-col items-center justify-center gap-2 bg-white p-4
                rounded-md shadow-md hover:bg-sky-100' key={index}>
                  <img src={item.image} className='w-40 h-40' alt={item
                  .title} />
                  <h1 className='text-xl'>{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
                  </h1>
                  <h1 className='text-xl'>{item.price}</h1>
                  <button className='bg-blue-500 text-white rounded-md p-2'>Add to cart
                    </button>
                    </div>
                    </button>
                    ))}
                    </div>
                    
                    
                    
                    )}
                    

      </div>

    </div>
    </div>
  )
}

export default data