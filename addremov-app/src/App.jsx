import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addnum = () => {
    if(count === 20){
     count = 20;
    }
    else{
      setCount(count + 1);
    }
  }
  const Removenum = ()=>{
    if(count <= 0){
     count = 0
    }
    else
    setCount(count-1);
  }
  return (
      <>
          <h1>React ADD & Remove</h1>
          <h2>Updated Value : {count} </h2>
          <br />
          <button onClick={addnum}>Click to Add</button>
          <br />
          <button onClick={Removenum} >Click to Remove</button>
          <p>outcome: {count} </p>
      </>
  )
}


export default App
