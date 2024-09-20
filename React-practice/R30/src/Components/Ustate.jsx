import React, {useState} from 'react'

const Ustate = () => {
  const [name, setName] = useState('Guest');
  const toggleName = () => {
    setName(prevName => (prevName === 'Hamza' ? 'Guest' : 'Hamza'));
  };
  const [Employed, setEmployed] = useState(false);
  const toggleEmp = () => {
    setEmployed(!Employed);
  };
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
  return (
    <>
      <p>Name: {name}</p>
      <button onClick={toggleName}>Username</button>
      <p>Employment Status: {Employed ? 'yes': 'No'}</p>
      <button onClick={toggleEmp}>Employed</button>
      <p>Counter: {count}</p>
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
      <p>Age: {val}</p>
      <button onClick={incrementAge}>Age</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};


export { Ustate, Age };
