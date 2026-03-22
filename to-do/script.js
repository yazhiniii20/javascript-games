const taskinput = document.getElementById("task-input");
const add = document.getElementById("add-btn");
const tasklist = document.getElementById("task-list");
let tasks = [];
add.addEventListener("click", function() {
    const taskvalue = taskinput.value;
    if(taskvalue === ""){
        return;
    }
    const task = {
        id : Date.now(),
        name : taskvalue,
        completed : false
    }
    tasks.push(task);
    taskinput.value = "";
    rendertasks();
});
function rendertasks(){
    tasklist.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${task.name}</p> 
                        <button onclick="deletetask(${task.id})">Delete</button>
                        <button onclick="donetask(${task.id})"> Done </button>`;
        if(task.completed){
            li.style.textDecoration = "line-through";
        }
        tasklist.appendChild(li);
    });
}
function deletetask(id){
    tasks = tasks.filter(task => task.id !== id);
    rendertasks();
}
function donetask(id){
    const task = tasks.find(task => {
        if(task.id === id){
            task.completed = !task.completed;
            return {...task, completed : task.completed};
        }else{
            return task;
        }});
    rendertasks();
}