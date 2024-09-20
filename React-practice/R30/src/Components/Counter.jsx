import { useState } from "react"

const Counter = () => {
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
   const btnStyle = 'bg-blue-500 hover:cursor-pointer border-none px-3 py-2 text-white rounded-[3px]';
  return (
    <>
      <div className="flex justify-center flex-col items-center my-56">
         <p className="text-black font-semibold text-[3rem] font-sans">
           Counter: {Count}
         </p>
         <div className="grid gap-4 grid-flow-col">
         <button className={btnStyle} onClick={IncCount}>
            Increment
         </button>
         <button className={btnStyle} onClick={deccCount}>
            Decrement
         </button>
         <button className={btnStyle} onClick={ResetCount}>
            Reset
         </button>
         </div>
      </div>
    </>
  )
}

export default Counter