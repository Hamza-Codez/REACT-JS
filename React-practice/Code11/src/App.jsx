import React, { createContext, useState } from 'react';
// import Card2 from './components/Card2';
// import Card from './components/Card'
// import BUtton from './components/BUtton'
// import EventHandle from './components/EventHandle';

  //Use ContextHooks
  //Step1: Create Context
 const UserContext = createContext();
  //Step2: wrap all the child components in a provider which you want to be the (consumer of the value)
  //Step3: Pass A Value
  // Now you can consume it in any Component
  import ChildA from './components/ChildA';
  
const App = () => {

  // const [count, setCount] = useState(0);
  // function FuncRun(){
  //   setCount(count+1);
  // }
  // function reset(){
  //   setCount(0);
  // }

  //State Lifting in React
      {/* Create State */}
      {/* manage State */}
      {/* Change State */}
      {/* State Syncronization in every children */}
      // const [name, setName] = useState("");
      // import UseEffect from './components/UseEffect';

  const [user, setUser] = useState({ name: "John", age: 25 });

  return (
    <>
      {/* 
      <Card name="Hamza">
        <h1>Hello World!</h1>
        <p>My good name is Hamza Ahmad</p>
        <p>How can I collaborate?</p>
      </Card>

      <Card>
        I am a software Engineer At Microsoft Google
        {/* I am a Software Engineer at Devsinc. */}
      {/*</Card>

      <BUtton clicked={FuncRun} text="Click to Add"/>
      <BUtton clicked={reset} text="Clear"/>
      <h1>{count}</h1>

      <div>
        <Card2 name={name} setName={setName}/>
        <p>I am inside the parent Element & my Name is : {name} </p>
      </div> */}

      {/* <div>
        <EventHandle />
      </div> */}
      {/* <UseEffect/> */}

      
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
    </>
  );
};

export default App;
export { UserContext };

