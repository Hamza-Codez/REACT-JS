import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import './App.css'
import Card from './components/card'

export default function App() {
  return (
   <>
     <Nav />
    <h1 className="bg-purple-600 p-4 rounded-xl">
      Hello world!
    </h1>
    <Card userName={"MacBook Air"} BtnText='Visit Now'/>
    <Card userName={"MacBook Pro"}/>
   </>
  )
}