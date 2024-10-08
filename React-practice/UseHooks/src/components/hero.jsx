import React from 'react'

const Hero = () => {
  return (
    <section className='relative text-white'>

      <div className='flex flex-row items-center gap-5 bg-deepBlue pl-12 pr-8'>
        <div className='space-y-8 w-[32rem]'>
          <h1 className='text-white font-mulish font-bold text-[45px] leading-[1.2]'>Power Your Finance, Grow Your Business</h1>
          <div className='w-6 h-1 bg-greenLight'>
          </div>
          <p className='text-white font text-[18px] opacity-65'>
            Accept Payments from customers, Automate payouts to vendors & employees. Never run out of working capital.
          </p>
          <button className='bg-lightBlue px-2 py-2 rounded-sm'>  
            Sign Up Now
          </button>
        </div>
        <img className='w-[56%]' src="/images/hero-illustration.jpg"/>
      </div>
      <div className='mt-[-1px] mr-[-1px]'>
        <img className='min-w-full min-h-[12rem]' src="./images/hero-shape.svg" alt="triangle" />
      </div>
    </section>
  )
}

export default Hero