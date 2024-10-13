import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const lineStyle = 'absolute bottom-0 w-full h-[5px] bg-gradient-to-bl from-blue-900 to-white hidden group-hover:block transition-all duration-200';
const navElementStyle = 'text-white hover:text-blue-900 py-4 cursor-pointer transition-all duration-200 relative group'

const Nav = () => {
  
  return (
    <>
    <nav className='flex items-center justify-between px-9 h-14 bg-gradient-to-r from-blue-300 to-blue-500 '>
      <NavLink to='/'>
        <img className='w-[60%]' src="/images/icon.png"/>
      </NavLink>
      <ul className='font-mulish flex space-x-7 items-center'>
        <li className={`${navElementStyle}`}>
          <NavLink to="/payment" className={({isActive})=> isActive ? 'text-blue-800': 'text-white'}>
            Payments
          </NavLink>
          <div className={`${lineStyle}`}></div>
        </li>
        <li className={`${navElementStyle}`}>
          <NavLink to="/banking" className={({isActive})=> isActive ? 'text-blue-800': 'text-white'}>
            Banking
          </NavLink>
          <div className={`${lineStyle}`}></div>
        </li>
        <li className={`${navElementStyle}`}>
          <a href="#">
            Corporate Card
          </a>
          <div className={`${lineStyle}`}></div>
        </li>
        <li className={`${navElementStyle}`}>
          <a href="#">
            Payroll
          </a>
        </li>
        <li className={`${navElementStyle}`}>
          <a href="#">
            Resources
          </a>
        </li>
        <li className={`${navElementStyle}`}>
          <a href="#">
            Support
          </a>
          <div className={`${lineStyle}`}></div>
        </li>
        <li className={`${navElementStyle}`}>
          <a href="#">
            Pricing
          </a>
          <div className={`${lineStyle}`}></div>
        </li>
      </ul>
        <div className='flex space-x-7 items-center'>
          <img className='w-11 h-8 space-x-3' src="/images/inr.png"/>
        <div className='space-x-3'>         
          <button className='py-1 px-5 text-white text-sm border-[0.1rem] border-blue-300 rounded-sm font-semibold'>Log In</button>
          <button className='py-[0.33rem] px-5 text-blue-500 text-sm bg-blue-100 font-semibold rounded-sm hover:text-blue-900 transition-all duration-150'><a href="#">Sign Up</a></button>
          </div>
        </div>
    </nav>
    </>
  )
}

export default Nav