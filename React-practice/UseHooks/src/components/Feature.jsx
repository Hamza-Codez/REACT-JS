import React from 'react'

const Feature = () => {
  return (
    <section className='relative mt-[88px] overflow-hidden mb-10'>
      <div><img src="./images/feature-section1-dottedrows.png" loading='lazy' width={'233'} height={'167'}
      className='absolute -top-[8rem] left-[2rem] inline-block -z-10'/></div>
      <img src="./images/feature-section1-dottedrows.png" 
      className='absolute top-14 right-8 inline-block rotate-180'/>

      <div className='relative w-11/12 max-w-[800px] mx-auto pt-4 mt-8 '>
        <h3 className='text-center text-2xl font-bold leading-[1.2]'>
          Accept Payment With RazorPay Suite
        </h3>
        <div className='w-6 h-1 bg-greenLight mx-auto mt-4 mb-6'></div>
        <div className='flex border-black border-[0.8px] border-opacity-20 rounded-md px-5 py-9'>
          <div className='w-[50%] space-y-10'>
            <h3 className='text-[1.4rem] font-bold '>Supercharge your business with the all-powerful <span className='text-lightBlue300 font-semibold'>Payment Gateways</span></h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
                <span className="opacity-70"> 100+ Payment Methods </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
                <span className="opacity-70"> Industry Leading Success Rate </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
                <span className="opacity-70"> Superior Checkout Experience </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
                <span className="opacity-70"> Easy to Integrate </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
                <span className="opacity-70"> Instant Settlements from Day 1 </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
                <span className="opacity-70"> In-depth Reporting and Insights </span>
              </li>
           </ul>
            <div className='flex self-start space-x-2 md:items-center cursor-pointer group'>
              <button className='bg-lightBlue w-full md:w-fit text-white py-[12px] px-[16px] rounded-md
                  font-mullish font-bold hover:bg-lightBlue500 translate-all duration-200 '>Sign Up Now</button>
                    <a href="" className='text-lightBlue font-bold group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                    <i className="fa-solid fa-angle-right w-5 h-5 text-lightBlue500 
                      group-hover:text-grayBlue transition-all duration-200" style={{ color: "#45a7f2" }}></i>
            </div>
          </div>
          <img src="./images/payment-suite.png" alt="" className='w-[50%]'/>
        </div>
      </div>
    </section>
  )
}

export default Feature