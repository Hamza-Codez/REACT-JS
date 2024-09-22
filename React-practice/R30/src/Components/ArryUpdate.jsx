import React, { useState } from 'react'

const ArryUpdate = () => {
  
  const [items, setItems] = useState(['Apple','Banana','Watermelon','Pear','Orange','Mango']);
  const [fruit, setNewfruits] = useState('');
  
  function addfoodHandler(){
    if(fruit.trim() === '') return;
    setItems((i)=>[...i, fruit]);
    setNewfruits('');
  }
  return (
    <div>
      <h1>List Of the food Items</h1>
      <ul>
        {items.map((food, index)=><li key={index}>{food}</li>)}
      </ul>
      <input type="text" value={fruit} onChange={(e)=>setNewfruits(e.target.value)} placeholder='Enter a new Food Item'/>
      <button onClick={addfoodHandler}>Add Fruit</button>
    </div>
  )
}

export default ArryUpdate;