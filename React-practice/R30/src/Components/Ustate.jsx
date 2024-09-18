import React, {useState} from 'react'

const Ustate = () => {
  const [count, setCount] = useState(0);
  const update = ()=>{
    if(count<7){
      setCount(count+1)
    }
  }
  const degrade = ()=>{
    if(count <= 7 && count !==-7){
      setCount(count-1)
    }
  }
  const reset = ()=>{
    setCount(0);
  }
  const isEmployed = () =>{
    
  }
  return (
    <>
    <div>{count}</div>
      <button onClick={update}>
        click Here!
      </button>
      <button onClick={degrade}>
        Decrement!
      </button>
      <button onClick={reset}>
        Reset!
      </button> 
    </>
  )
}


const Age = () => {
  const [val, setVal] = useState(0);

  const incrementAge = () => {
      setVal(val + 1);
  };
  const reset = ()=>{
    setVal(0);
  }

  return (
    <>
      <div>Age: {val}</div>
      <button onClick={incrementAge}>Age</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export { Ustate, Age };
