import "./TaskList.css";
import { useState , useEffect } from "react";
function TaskList(){
    const[tasks,setTasks] = useState([]);
    const[input,setInput] = useState("");
    const[filter,setFilter] = useState("all");
    useEffect(() => {
        if (tasks.length > 0) {
          localStorage.setItem("tasks", JSON.stringify(tasks));
        }
      }, [tasks]);
    useEffect(() => {
     const saved = localStorage.getItem("tasks");
     if(saved){
        setTasks(JSON.parse(saved));
     }
    },[])
    function addTask(){
        if(input === ""){
            return;
        }
        const newtask = {
            id : Date.now(),
            content : input,
            isCompleted : false
        }
        setTasks([...tasks,newtask]);
        setInput("");
    }
    function updatetask(id){
     setTasks(tasks.map(task => {
        if(task.id === id){
            return {...task, isCompleted : !task.isCompleted};
        }else{
            return task;
        }
            
     }))
    }
    function deletetask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }
    let filteredTasks;
    if(filter === "all"){
        filteredTasks = tasks;
    }
    if(filter === "completed"){
        filteredTasks = tasks.filter(task => task.isCompleted);
    }
    if(filter === "pending"){
        filteredTasks = tasks.filter(task => !task.isCompleted);
    }
   return (
     <div className="container">
            <h1> To Do List App </h1>
         <input className = "input" type="text" placeholder = "Enter task to do.." value = {input} onChange = {(e) => setInput(e.target.value)} />
         <button className = "add-btn" onClick={addTask}>Add Task</button>
         <div className = "filter-container">
              <button className = {`filter-btn ${filter === "all" ? "active" : ""}`} onClick = {() => setFilter("all")}>All</button>
              <button className = {`filter-btn ${filter === "completed" ? "active" : ""}`} onClick = {() => setFilter("completed")}>Completed</button>
              <button className = {`filter-btn ${filter === "pending" ? "active" : ""}`} onClick = {() => setFilter("pending")}>Pending</button>
         </div>
         <ul>
            {filteredTasks.map(task => <li className = {`tasklist${task.isCompleted ? " completed" : ""}`}key = {task.id} > {task.content}
                <div className = "button-container">
                <button className = "update-btn" onClick={() => updatetask(task.id)} >Done</button>
                <button className = "delete-btn" onClick = {() => deletetask(task.id)}>Delete</button>
                </div>
            </li>)}
         </ul>
     </div>
   );
}
export default TaskList;