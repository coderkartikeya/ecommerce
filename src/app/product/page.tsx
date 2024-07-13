'use client';
import React, { useEffect, useState,Suspense } from 'react';
import Taskbar from '../components/Taskbar';
import { useSearchParams, useRouter } from 'next/navigation';
import Box from '../components/Box';
import Image from 'next/image';

interface Item {
  id: number;
  title: string;
  details: string;
  image: string;
  price: number;
  ratings:number
}

const PageContent = () => {
  const [data, setData] = useState<Item[]>([]);
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [pop, setPop] = useState<Item[]>([]);

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
        setData(result.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleItemClick = (item: Item) => {
    setVisible(true);
    setPop([ item]);
  };

  return (
    <div>
      {visible && <Box d={pop} visible={visible} setVisible={setVisible} />}
      <div className={`w-full h-full flex flex-col bg-slate-100 ${visible ? 'blur-sm' : ''}`}>
        <Taskbar />
        <div className="flex p-10 flex-col">
          <h1 className="md:text-4xl text-2xl bg-white p-4 rounded-md">Trending products</h1>
        </div>
        <button className="p-2 text-center mx-10 bg-black text-white text-xl rounded-md" onClick={() => router.back()}>
          Back
        </button>
        {loading ? (
          <div className="flex justify-center items-center h-full w-full">Loading...</div>
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
            {data.map((item, index) => (
              
                <div className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-md shadow-md hover:bg-sky-100" key={index}>
                  <button onClick={() => handleItemClick(item)} key={index}>
                  <Image src={item.image} className="w-40 h-40" alt={item.title} height={200} width={200} />
                  <h1 className="text-xl">{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</h1>
                  <h1>{item.ratings}</h1>
                  <h1 className="text-xl">{item.price}</h1>
                  </button>
                  <button className="bg-blue-500 text-white rounded-md p-2">Add to cart</button>
                </div>
              
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);

export default Page;
