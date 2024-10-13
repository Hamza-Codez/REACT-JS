import React from 'react'

import { useNavigate } from 'react-router-dom'
const Payments = () => {
  const navigate = useNavigate();

  function handleclick(){
    navigate('/')
  }
  return (
    <>
        <div>
        Payments  
        </div>  
        <button className='border-2 p-2 bg-slate-300' onClick={handleclick}>
          Mov to main page
        </button>

    </>

  )
}

export default Payments
