import React from 'react'

const EventHandle = () => {
  function run(){
    alert("I am clicked!")
  }
  function clicked(){
    alert('hovered')
  }
  function submited(){
    alert('Are you sure About Submitting Your Form')
  }
  return (
    <>
      {/* <p onMouseOver={clicked}>
        I am the Paragrah.
      </p> */}
      <h1>HAMZA Ahmad</h1>
      <button onClick={run} className='bg-slate-100 text-black p-1 rounded-sm'>
        click me 
      </button>
      <form onSubmit={submited}>
        <input type="text" />
        <button className='bg-slate-100 text-black p-1 rounded-sm' type='submit'>Submit</button>
      </form>
        <button className='bg-slate-100 text-black p-1 rounded-sm' onClick={() => alert('Hello World!')}>Click me</button>
    </>
  )
}

export default EventHandle