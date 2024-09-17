import React from 'react';
import { LondonCard, ParisCard, NyCard } from './Components/Card';
import Worker from './Components/Worker';
import User from './User';
import List from './Components/List';

const App = () => {
  return (
    <>
      <div className='my-4 mx-1'>
        <div className='lg:grid lg:grid-cols-3 '>
          <ParisCard />
          <LondonCard />
          <NyCard />
          <ParisCard />
          <LondonCard />
          <NyCard />
        </div>
        <div className='flex flex-col my-8'>
          <Worker name='Haroon Mustafa' profession='Business Admin' isFiler={false} />
          <Worker name='Kamran Ahmad' profession='HR' isFiler={true} />
          <Worker name='Noor Ismail' profession='Accounts Manager' isFiler={false} />
          <Worker name='Malik Pasha' profession='IT Manager' isFiler={true} />
          <Worker  />
        </div>
        <div className='text-center flex justify-center font-semibold'>
        <User isLoggedin = {true} userName = 'Jamaal Ahmad' />
        </div>
        <List/>
      </div>
    </>
  );
}

export default App;
