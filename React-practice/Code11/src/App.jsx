import React, { useState } from 'react'
import Card from './components/Card'
import BUtton from './components/BUtton'

const App = () => {

  const [count, setCount] = useState(0);
  function FuncRun(){
    setCount(count+1);
  }
  function reset(){
    setCount(0);
  }
  return (
    <>
      <Card name="Hamza">
        <h1>Hello World!</h1>
        <p>My good name is Hamza Ahmad</p>
        <p>How can I collaborate?</p>
      </Card>

      <Card>
        I am a software Engineer At Microsoft Google
        {/* I am a Software Engineer at Devsinc. */}
      </Card>

      <BUtton clicked={FuncRun} text="Click to Add"/>
      <BUtton clicked={reset} text="Clear"/>
      <h1>{count}</h1>
      
    </>
  );
};

export default App