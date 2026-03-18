const prompt = require("prompt-sync")();
let tasks = [];
let running = true;
while (running) {
    console.log("\nTodo Menu");
    console.log("1 Add Task");
    console.log("2 Remove Task");
    console.log("3 Mark Task Complete");
    console.log("4 Show All Tasks");
    console.log("5 Show Completed Tasks");
    console.log("6 Exit");
    const choice = prompt("Enter your choice: ");
   if (choice == "1") {
    const content = prompt("Enter task: ");
    const newTask = {
      id: tasks.length + 1,
      content,
      isComplete: false
    }; 
    tasks.push(newTask); 
    console.log("Task added!"); 
  }
    else if (choice == "2") {
        const id = parseInt(prompt("Enter task ID to remove: "));
        tasks = tasks.filter(task => task.id !== id);
        console.log("Task removed!");
    }
    else if (choice == "3") {
        const id = parseInt(prompt("Enter task ID to mark complete: "));
        const task = tasks.find(task => task.id === id);
        if (task) {
        task.isComplete = true;
        console.log("Task marked complete!");
        } else {
        console.log("Task not found!");
        }
    }
    else if (choice == "4") {
        console.log("All Tasks:");
        console.log(tasks);
    }
    else if (choice == "5") {
        console.log("Completed Tasks:");
        const completed = tasks.filter(task => task.isComplete);
        console.log(completed);
    }
    else if (choice == "6") {
        running = false;
        console.log("Exiting...");
    } else {
        console.log("Invalid choice, please try again.");
    }
}