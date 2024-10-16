import React from 'react'

const BUtton = (props) => {
  return (
    <button onClick={props.clicked}>
       {props.text}
    </button>
  )
}

export default BUtton