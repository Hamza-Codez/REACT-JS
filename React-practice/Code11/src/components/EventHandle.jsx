import React from 'react'

const EventHandle = () => {
  function run(){
    alert("I am clicked!")
  }
  function clicked(){
    alert('hovered')
  }
  function submited(){
    alert('Are you sure About Submitting Your Form')
  }
  return (
    <>
      {/* <p onMouseOver={clicked}>
        I am the Paragrah.
      </p> */}
      <h1>HAMZA Ahmad</h1>
      <button onClick={run} className='bg-slate-100 text-black p-1 rounded-sm'>
        click me 
      </button>
      <form onSubmit={submited}>
        <input type="text" />
        <button className='bg-slate-100 text-black p-1 rounded-sm' type='submit'>Submit</button>
      </form>
        <button className='bg-slate-100 text-black p-1 rounded-sm' onClick={() => alert('Hello World!')}>Click me</button>
    </>
  )
}

export default EventHandle



/*  Here are some helpful notes on event handling in React:

1. **Event Handling in JSX**:
   - React events are written in camelCase (e.g., `onClick`, `onChange`) instead of lowercase, like in plain HTML.
   - For example: `<button onClick={handleClick}>Click Me</button>`

2. **Function References vs. Inline Functions**:
   - Use a function reference to pass a function without executing it immediately: `onClick={handleClick}`.
   - Inline functions (e.g., `onClick={() => handleClick(param)}`) can be used for passing arguments but may cause re-renders if not used carefully.

3. **Event Object**:
   - React provides a `SyntheticEvent` wrapper around the native browser event to ensure compatibility across all browsers.
   - Use `event.preventDefault()` within this object to prevent the default action, such as page reload on form submit.

4. **Binding Event Handlers**:
   - If you're using a class component, bind `this` for event handlers in the constructor or use arrow functions to ensure the correct context.

5. **Propagation Control**:
   - `event.stopPropagation()` stops further propagation of the event in the bubbling phase, useful for nested elements.

6. **State and Events**:
   - Event handlers often modify state, so avoid using `setState` inside a loop as it can lead to unexpected results.*/