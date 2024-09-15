import React from 'react';
import { LondonCard, ParisCard, NyCard } from './Components/Card';
import Worker from './Components/Worker';

const App = () => {
  return (
    <>
      <div className='lg:grid lg:grid-cols-3 gap-4'>
        <ParisCard />
        <LondonCard />
        <NyCard />
        <ParisCard />
        <LondonCard />
        <NyCard />
      </div>
      <div className='flex flex-col'>
        <Worker name='Haroon Mustafa' profession='Business Admin' isFiler={false} />
        <Worker name='Kamran Ahmad' profession='HR' isFiler={true} />
        <Worker name='Noor Ismail' profession='Accounts Manager' isFiler={false} />
        <Worker name='Malik Pasha' profession='IT Manager' isFiler={true} />
        <Worker  />
      </div>
    </>
  );
}

export default App;
