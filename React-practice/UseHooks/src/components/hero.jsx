import React from 'react'

const Hero = () => {
  return (
    <section className='relative bg bg-deepBlue'>

      <div className='flex flex-row items-center gap-5 pl-12 pr-8 mx-auto justify-between text-white w-full  max-w-[1300px]'>
        <div className='space-y-8 w-[32rem]'>
          <h1 className='text-white font-mulish font-bold text-[45px] leading-[1.2]'>Power Your Finance, Grow Your Business</h1>
          <div className='w-6 h-1 bg-greenLight'>
          </div>
          <p className='text-white font text-[18px] opacity-65'>
            Accept Payments from customers, Automate payouts to vendors & employees. Never run out of working capital.
          </p>
          <button className='bg-lightBlue px-3 py-2 rounded-md hover:bg-lightBlue500 transition-all duration-500 font-semibold text-[1rem]'>  
            Sign Up Now
          </button>
        </div>
        <img className='w-full max-w-[680px]' src="/images/hero-illustration.jpg"/>
      </div>
      <div className='absolute right-0 left-0 -mt-1'>
        <img className=' min-w-[100.1%] ' src="./images/hero-shape.svg"/>
      </div>
    </section>
  )
}

export default Hero