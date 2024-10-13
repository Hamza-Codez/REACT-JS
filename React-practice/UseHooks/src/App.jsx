import React from 'react';
import Nav from './components/Nav';
import Hero from './components/hero';
import Feature from './components/Feature';
import Payments from './components/Payments'
import Banking from './components/Banking';
import Loans from './components/Loans';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Children } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Nav />
        <Hero />
        <Feature />
      </div>
    ),
  },
  {
    path: '/payment',
    element: (
      <div>
        <Nav />
        <Payments/>
      </div>
    ),
  },
  {
    path: '/banking',
    element: (
      <div>
        <Nav />
        <Banking/>
      </div>
    ),
    children:[
      {
         path:'/insurance'
      },
      {
         path:'/finance'
      },
      {
         path:'/loans',
         element: (
           <div>
             <Nav/>
            <Loans/>
           </div>
         ),
      }
    ]
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
