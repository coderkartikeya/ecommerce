// components/Carousel.js
'use client'
import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/c4.jpg',
    'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    '/c3.jpg',
    '/login1.jpg',
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full md:h-1/2  h-[200px] overflow-hidden">
      <div className="flex justify-center w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out bg-cover p-9 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2  rounded-md p-2 hover:bg-gray-200 hover:text-black bg-black text-white"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2  rounded-md p-2 hover:bg-gray-200 hover:text-black bg-black text-white"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;