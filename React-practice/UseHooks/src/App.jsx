import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Payments from './components/Payments'
import Banking from './components/Banking';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

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
