import React from 'react'

const Button = () => {

  // const handleClik = ()=>{
  //   console.log('Hello World!')
  // }

  // const handleClik2 = (name)=>{
  //   console.log(`${name} stop Clicking me!`)
  // }

  let count = 0;
  const handclik3 = (name)=>{
    if(count<5){
      count++;
      console.log(`${name} you clicked me ${count} number of times!`);
    }else{
      console.log(`${name} stop clicking me again!`);
    }
  }

  return (
    <>
    
    <button onClick={() => handclik3('Hamza')}>
      Click me
    </button>
    </>
  )
}

export default Button