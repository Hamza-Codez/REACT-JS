import React from 'react'

const Card = () => {
  return (
    <div className='grid p-8 text-center gap-6 md:grid-cols-2 md:text-start md:items-center'>
      <div className='w-[100%] '>
        <img className='border-none rounded-xl w-full' src="/Images/pexels-photo-220769.jpeg" alt="London" />
      </div>
      <div>
        <h1 className='font-bold text-fuchsia-800 text-2xl md:text-3xl mb-2'>London</h1>
        <p className='font-semibold text-sm md:text-base'>
          London, the capital of the United Kingdom, is one of the most iconic and influential cities in the world. Founded by the Romans over 2,000 years ago, it has grown into a global hub for finance, culture, art, education, and politics.
        </p>
      </div>
    </div>
  );
};

export default Card;

