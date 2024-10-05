import React from 'react'

const Hero = () => {
  return (
    <section className='relative p-8 bg-deepBlue'>

      <div className='flex '>
        <div>
          <h1 className='text-white'>Power Your Finance Grow Your Business</h1>
          <div className='w-6 h-1 bg-greenLight'>
          </div>
          <p >
            Accept Payments from customers, Automate payouts to vendors & employees. Never run out of working capital.
          </p>
          <button>  
            Sign Up Now
          </button>
        </div>
        <img src="/images/hero-illustration.jpg"/>
      </div>
      <div>
        <img src="./images/hero-shape.svg" alt="triangle" />
      </div>
    </section>
  )
}

export default Hero