import React from 'react'
import Taskbar from '../components/Taskbar.jsx'
import Carousel from '../components/Carousel.jsx'
import Categories from '../components/Categories.jsx'
const page = () => {
  return (
    <div className='h-screen w-screen flex flex-col bg-slate-100'>
        <Taskbar/>
        <Categories/>
        <Carousel />

        

    </div>
  )
}

export default page