import React, { useState } from 'react'
import { useEffect } from 'react'

  const UseEffect = () => {

      //first -> side-effect function
      //second clean-up funtion
      //third -> comma separated dep list
      //variation: 1
      //runs on every render
  const [count, setCount] = useState(0);
  function inc(){
    setCount(count+1);
  }
//   useEffect(() => {
//     return () => {
//       alert("Hello World welcome the World of Code Jefxon")
//     }
// },[count])  // This will run everytime the count will update

//   useEffect(() => {
//     return () => {
//       alert("Hello World welcome the World of Code Jefxon")
//     }
// },[]) this will rener for 1 reload only

const [second, setSeconds] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Interval executed')
    setSeconds(prev => prev + 1);
  }, 1000);
  
  return () => {
    console.log('Interval Terminted')
    clearInterval(interval)
  };
}, [])

  return (
  <>
    <h1>Time is: {second}</h1>
    <div>
      Hello World
    </div>
    count is : {count}
    <br />
    <button className='bg-slate-100 text-black p-1 rounded-sm' onClick={inc}>Icrement</button>
  </>
  )
}

export default UseEffect