import "./TaskList.css";
import { useState } from "react";
function TaskList(){
    const[tasks,setTasks] = useState([]);
    const[input,setInput] = useState("");
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
   return (
     <div className="container">
            <h1> To Do List App </h1>
         <input className = "input" type="text" placeholder = "Enter task to do.." value = {input} onChange = {(e) => setInput(e.target.value)} />
         <button className = "add-btn" onClick={addTask}>Add Task</button>
         <ul>
            {tasks.map(task => <li className = {`tasklist${task.isCompleted ? " completed" : ""}`}key = {task.id} > {task.content}
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