import React, { useState } from 'react'

const Todo = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("Morning Exercise", "Take a shower", "Have some Breakfast");

  function hanndleInputTask(e){
    setNewTask(e.target.value);
  }
  function addTask(){

  }
  function deleteTak(){

  }
  function upTask(){

  }
  function downTask(){

  };
  return (
    <>
    <div>
      <h1>To-Do-List 🗄️</h1>
      <div>
        <input type="text" onChange={hanndleInputTask} value={newTask} placeholder='Enter Your task here 👇' />
        <button>Add Task</button>
      </div>
      <ol>
        {tasks.map((task, index)=>
        <li key={index}>{task}</li>
        )}
      </ol>
    </div>
    </>
  )
}

export default Todo