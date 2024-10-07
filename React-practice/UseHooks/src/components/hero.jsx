import React from 'react'

const Hero = () => {
  return (
    <section className='relative p-8 bg-deepBlue text-white'>

      <div className='flex flex-row mx-8 gap-9 items-center'>
        <div className='space-y-8 w-[40%]'>
          <h1 className='text-white font-mulish font-bold text-[40px] leading-[1.2]'>Power Your Finance Grow Your Business</h1>
          <div className='w-6 h-1 bg-greenLight'>
          </div>
          <p className='text-white font'>
            Accept Payments from customers, Automate payouts to vendors & employees. Never run out of working capital.
          </p>
          <button className='bg-lightBlue px-2 py-1 rounded-md'>  
            Sign Up Now
          </button>
        </div>
        <img className='w-[50%]' src="/images/hero-illustration.jpg"/>
      </div>
      <div>
        <img src="./images/hero-shape.svg" alt="triangle" />
      </div>
    </section>
  )
}

export default Hero