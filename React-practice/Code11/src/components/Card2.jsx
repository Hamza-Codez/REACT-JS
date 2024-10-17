import React from 'react'

const Card2 = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>props.setName(e.target.value)}/>
      <p>A Pakistani Citzen in NADRA DB System is Being astestified as : {props.name}</p>
    </div>
  )
}

export default Card2