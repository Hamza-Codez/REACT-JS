import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const callName =  function(){
  let person = prompt("Please enter your name", "Harry Potter");
  return person;
}
const reactEliment = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit Google Engine'
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Click me to visit google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
