import React from 'react'

const List = () => {
  const fruits = [{id:1, name:'Apple' , color:'Red', MRP: 150},
                 {id:2, name:'Banana', color:'Yellow', MRP: 100}, 
                 {id:3, name:'PineApple', color:'Mustard', MRP: 549},
                 {id:4, name:'Grapes', color:'Green', MRP: 200},
                 {id:5, name:'Dates', color:'Brown', MRP: 450},
                 {id:6, name:'Guava', color:'Parret', MRP: 180}]
     //    fruits.sort((a, b)=>{a.name.localeCompare(b.name)})
        fruits.sort((a, b)=>a.MRP - b.MRP);
        fruits.sort((a, b)=>a.MRP - b.MRP);
  const vegetables = [{id:1, name:'Cucumber',color: 'Green-Darkish', MRP: 90},
                      {id:2, name:'Potato', color: 'Brown', MRP: 120},
                      {id:3, name:'Ginger', color: 'Gold', MRP: 340},
                      {id:4, name:'Chilli', color: 'Red/Green', MRP: 80}]

  const list1 = fruits.map((fruit) => <li key={fruit.id}> {fruit.name} is {fruit.color} in color and is being sold at RS {fruit.MRP} /kg in locale Market.</li>)
  const list2 = vegetables.map((veges)=> <li key={veges.id}>{veges.name} and its color is {veges.color}and is being sold at RS {veges.MRP} /kg in locale Market.</li>)

  return (
    <>
      <h1 className='font-semibold text-xl '>Fruits</h1>
      <ul>{list1}</ul>
      <h1 className='font-semibold text-xl '>Veges</h1>
      <ul>{list2}</ul>    
    </>
  )
}

export default List