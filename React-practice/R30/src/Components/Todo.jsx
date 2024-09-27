import React, { useState } from "react";

const Todo = () => {
  const [placeholder, setPlaceholder] = useState("Enter a task...");
  const [tasks, setTasks] = useState([
    "Do shower",
    "Take Breakfast",
    "Go to the Classroom",
  ]);
  const [newTask, setNewTask] = useState("");

  function inputtaskHandler(event) {
    setNewTask(event.target.value);
  }
  function addtaskHandler() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
      setPlaceholder("Enter New Task...");
    } else {
      setPlaceholder("Can't submit 🔃");
    }
  }
  function removetaskHandler(index) {}
  function PriorTask() {}
  function downgradeTask() {}
  function scroller() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  const btnStyle =
    "rounded-md px-3 py-2 border-none hover:cursor-pointer text-semibold text-slate-100";
  const aTagStyle = 'no-underline bg-clip-text text-transparent font-bold text-md hover:text-gray-300'
  return (
    <div className="flex flex-col text-center justify-center font-sans bg-gradient-to-r  from-slate-500 via-slate-300 to-slate-500
 h-full mb-0 ">
      <a href="#" className={aTagStyle}>
      <h1 className="bg-gradient-to-tr from-gray-300 via-slate-700 to-white bg-clip-text text-transparent text-7xl font-bold pb-3">
        Essentiafy+
      </h1>
      </a>
      <div className="flex items-center justify-center gap-2">
        <input
          className="p-[0.47rem] rounded-full border-none bg-gradient-to-t from-slate-400 to-slate-200 my-3 px-12 font-semibold font-sans"
          type="text"
          placeholder={placeholder} 
          value={newTask}
          onChange={inputtaskHandler}
        />
        <button
          className={`${btnStyle} bg-gradient-to-tr  from-slate-800 to-blue-400  px-6 py-2 rounded-full`}
          onClick={addtaskHandler}
        >
          Add
        </button>
      </div>
      <ul className="list-none mb-16">
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              className="flex flex-1 items-center font-sans text-lg font-semibold text-gray-500 px-5 py-4 mr-14 my-2  mx-4
             justify-between border-solid border-2 border-gray-400 rounded-md bg-gradient-to-b from-gray-400 to-slate-200 "
            >
              {task}
              <div className="flex gap-2">
                <button
                  className={`${btnStyle} bg-gradient-to-tr from-slate-800 to-blue-400`}
                  onClick={() => PriorTask(index)}
                >
                  Upgrade ☝️
                </button>
                <button
                  className={`${btnStyle} bg-gradient-to-tr from-slate-700 to-slate-300`}
                  onClick={() => downgradeTask(index)}
                >
                  Down Grade ⬇️
                </button>
                <button
                  className={`${btnStyle} bg-gradient-to-tr from-red-700  to-red-300`}
                  onClick={() => removetaskHandler(index)}
                >
                  Delete 🔴
                </button>
              </div>
            </span>
          </li>
        ))}
      </ul>
      <footer className="flex flex-1 flex-row items-center justify-between bg-gradient-to-r from-slate-800 via-blue-400 to-slate-800 h-16 px-7 fixed  bottom-0 left-0 right-0">
        <h className="text-slate-200 font-light">Pioneered by: <span className={`${aTagStyle} bg-gradient-to-tr from-slate-400 to-blue-300 font-semibold`} ><a className={aTagStyle} target="_blank" href="https://discord.com/users/1260630616018386975">Hamza Ahmad</a></span></h>
        <div className="flex items-center flex-row gap-5 text-white">
          <a 
            className={`${aTagStyle} bg-gradient-to-tr from-blue-400 to-[#316FF6]`}    
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.facebook.com/profile.php?id=100050686890379&mibextid=ZbWKwL">
            FaceBook
          </a>
          <a 
            className={`${aTagStyle} bg-gradient-to-tr from-blue-500 to-blue-600`}    
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/m-hamza-ahmad-0030452b4">
            Linkedin
          </a>
          <a 
            className={`${aTagStyle} bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400 `}    
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.instagram.com/hamza_pixelcrusader?igsh=MmtnNHQ3dHp5Y202">
            Instagram
          </a>
           <img onClick={scroller} style={{ cursor: 'pointer' }} src="/public/Images/icons8-arrow-up-48.png" />        
        </div>
      </footer>
    </div>
  );
};

export default Todo;
