import { useState } from "react"

const [Count , setCount] = useState(0);
const IncCount = () => {
   setCount(Count+1);
}
const deccCount = () => {
   setCount(Count-1);
}
const ResetCount = () => {
   setCount(0);
}

const Counter = () => {
  return (
    <>
      <p>
         
      </p>
      <button onClick={IncCount}>
         Increment
      </button>
      <p>

      </p>
      <button onClick={deccCount}>
         Decrement
      </button>
      <p>

      </p>
      <button onClick={ResetCount}>
         Reset
      </button>
    </>
  )
}

export default Counter