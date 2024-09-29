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
  function removetaskHandler(index){
    const remover = tasks.filter((_,i)=>i !==index);
    setTasks(remover)
  }
  function PriorTask(index){
    if(index > 0){
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index-1]] =
      [updatedTask[index-1], updatedTask[index]];
      setTasks(updatedTask);
    }
  }
  function downgradeTask(index){
    if(index < tasks.length -1){
      const downTask = [...tasks];
      [downTask[index],downTask[index+1]] =
      [downTask[index+1],downTask[index]];
      setTasks(downTask);
    }
  }
  function scroller() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  const btnStyle =
    `rounded-full px-2 py-1 border-none hover:cursor-pointer text-semibold text-slate-200 text-[0.67rem]               
    lg:text-[0.77rem] lg:rounded-md lg:py-[0.44rem] lg:px-3
    md:text-[0.7rem] md:rounded-xl md:py-[0.44rem] md:px-4
    sm:text-[0.64rem] sm:rounded-xl sm:py-[0.4rem] sm:px-4`;
  const aTagStyle = ' no-underline text-gray-300 text-sm font-semibold hover:text-gray-300'
  const flax = 'flex items-center space-x-2'
  return (
    <>
      <div className="flex flex-col text-center justify-center font-sans bg-gradient-to-r  from-slate-500 via-slate-300 to-slate-500
 min-h-screen min-w-fit mb-0 ">
      <a href="#" className={aTagStyle}>
      <h1 className="bg-gradient-to-tr from-gray-300 via-slate-700 to-white bg-clip-text text-4xl text-transparent  
      font-bold pb-3
      lg:text-7xl
      md:text-6xl
      ">
        Essentiafy+
      </h1>
      </a>
      <div className="flex items-center justify-center gap-2
      md:gap-2
      lg:gap-3
      ">
        <input
          className="p-[0.4rem] rounded-full border-none bg-gradient-to-t from-slate-400 to-slate-200 my-4 px-5 font-semibold font-sans
           lg:p-[0.7rem] lg:px-[6rem] 
           md:py-[0.57rem] md:px-[5rem]
          "
          type="text"
          placeholder={placeholder} 
          value={newTask}
          onChange={inputtaskHandler}
        />
        <button
          className={`${btnStyle} bg-gradient-to-tr  from-slate-800 to-blue-400  my-3 px-[1rem] py-[0.6rem]  rounded-full
            lg:py-[0.77rem] lg:px-[1.9rem] lg:rounded-full
           md:py-[0.67rem] md:px-[1.4rem] md:rounded-full
           sm:py-[0.67rem] sm:px-[1.4rem] sm:rounded-full
          `}
          onClick={addtaskHandler}
        >
          Add
        </button>
      </div>
      <ul className="list-none mb-[8rem]
      ">
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              className="flex flex-1 flex-col items-center h-[3.4rem] font-sans text-[0.98rem] font-semibold text-gray-600 px-5 py-4 ml-[-1rem] my-1 mb-2
                mx-4 justify-between border-solid border-2 border-gray-400 rounded-tr-xl rounded-bl-xl bg-gradient-to-b from-gray-400 to-slate-200 
                lg:text-[1.18rem] lg:font-semibold lg:mr-[3.5rem] lg:ml-[1rem] lg:my-2 lg:rounded-md lg:flex-row lg:h-7
                md:text-[1.011rem] md:font-medium md:mr-[4rem] md:ml-[1.7rem] md:my-2 md:rounded-xl md:mb-2 md:flex-row md:h-6
                sm:text-[0.87rem] sm:rounded-2xl sm:mb-2 sm:flex-row sm:h-4 
                "
            >
              {task}
              <div className="flex gap-2">
                <button
                  className={`${btnStyle} bg-gradient-to-tr from-slate-800 to-blue-400                  
                  `}
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
    </div>
      <footer className="flex flex-col gap-2 items-center bg-gradient-to-b
       from-slate-400 via-gray-200 to-slate-100 
       lg:bg-gradient-to-tl lg:from-slate-500 lg:via-gray-300 lg:to-zinc-500 
       md:bg-gradient-to-tl md:from-blue-100 md:via-slate-300 md:to-slate-600 
       sm:bg-gradient-to-tr sm:from-slate-500 sm:via-blue-100 sm:to-slate-500 
       py-2 h-fit px-7 fixed  bottom-0 left-0 right-0 font-sans 
       sm:flex-row sm:justify-between sm:h-[2.5rem] md:h-[3rem]
       ">
      <div className=" text-gray-900 font-semibold text-[0.8rem] sm:text-[0.85rem] md:text-[0.92rem] lg:text-[1rem]">
        Pioneered by:
        <a 
          className={aTagStyle} 
          target="_blank" 
          href="https://discord.com/users/1260630616018386975"
        >
          <span className="
            text-gray-900 text-[1rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-semibold ml-2"
          >
              Hamza Ahmad
          </span>
        </a>
      </div>
        <div className="flex gap-5">
          <a className={`${aTagStyle} flex items-center gap-2`}    
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.facebook.com/profile.php?id=100050686890379&mibextid=ZbWKwL">
            <img className="w-5 lg:w-[1.6rem] md:w-[1.4rem]" src="public/Images/facebook.png" alt="Facebook Logo" />
          </a>

          <a className={`${aTagStyle} flex items-center gap-2`}    
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/m-hamza-ahmad-0030452b4">
            <img className="w-5 lg:w-[1.6rem] md:w-[1.4rem]" src="public/Images/linkedin.png" alt="LinkedIn Logo" />
          </a>

          <a className={`${aTagStyle} flex items-center gap-2`}    
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.instagram.com/hamza_pixelcrusader?igsh=MmtnNHQ3dHp5Y202">
            <img className="w-5 lg:w-[1.6rem] md:w-[1.5rem]" src="public/Images/instagram.png" alt="Instagram Logo" />
          </a>
       <img className="w-5 block sm:block md:w-[1.5rem] lg:hidden" onClick={scroller} style={{ cursor: 'pointer' }} src="/public/Images/icons8-arrow-up-100 (1).png" />        

        </div>
       <img className="w-5 lg:w-[2rem] hidden lg:pl-[12rem] lg:block" onClick={scroller} style={{ cursor: 'pointer' }} src="/public/Images/icons8-arrow-up-100 (1).png" />        
      </footer>
    </>
  );
};

export default Todo;
