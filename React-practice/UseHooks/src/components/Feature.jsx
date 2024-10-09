import React from 'react'

const Feature = () => {
  return (
    <section className='relative mt-[88px] overflow-hidden flex flex-row justify-between'>
      <div><img src="./images/feature-section1-dottedrows.png" loading='lazy' width={'233'} height={'167'}
      className='absolute -top-[8rem] left-[2rem] inline-block -z-10'/></div>
      <img src="./images/feature-section1-dottedrows.png" 
      className='absolute top-14 right-8 inline-block rotate-180'/>

      <div>
        <h2>
          Accept Payment With RazorPay Suite
        </h2>
        <div></div>
        <div>
          <div>
            <h3>Supercharge your business with the all-powerful <span className='text-lightBlue300 font-semibold'>Payment Gateways</span></h3>
            <ul>
               <li><span>100+ Payment Methods</span></li>
               <li><span> Industry Leading Success Rate </span></li>
               <li><span> Superior Checkout Experience </span></li>
               <li><span> Easy to Integrate </span></li>
               <li><span> Instant Settlements from day 1 </span></li>
               <li><span> In-depth Reporting and Insights </span></li>
            </ul>
            <div>
              <button>Sign Up Now</button>
              <a href="">Know More</a>
              <i></i>
            </div>
          </div>
          <img src="./images/payment-suite.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Feature