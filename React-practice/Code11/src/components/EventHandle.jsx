import React from 'react'

const EventHandle = () => {
  function run(){
    alert("I am clicked!")
  }
  function clicked(){
    alert('hoverd')
  }
  return (
    <>
      <p onMouseOver={clicked()}>
        I am the Paragrah.
      </p>
      <h1>HAMZA Ahmad</h1>
      <button onClick={run} className='bg-slate-100 text-black p-1 rounded-sm'>
        click me 
      </button>
    </>
  )
}

export default EventHandle