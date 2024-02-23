

var tasks = [
    {
        title:'chore',
        description:'wash dishes',
        duedate:new Date("2024-02-24"),
        complete: false
    },
    {
        title:'Appointemnt',
        description:'Skin checkup',
        duedate:new Date("2024-02-28"),
        complete: false
    },
    {
        title:'Leisure',
        description:'Staycation',
        duedate:new Date("2024-03-30"),
        complete: false
    },
    {
        title:'Shopping',
        description:'Buy groceries',
        duedate:new Date("2024-02-20"),
        complete: false
    },
];

const addTask = (title, description, duedate, complete = false) =>{
    var newTask = {
        title : title,
        description :description,
        duedate : duedate,
        complete : complete,
    };
    tasks.push(newTask)
};

addTask('praying', 'Go to church', 'new date(2024-02-25)')
console.log(tasks)


// 
function displayTasks() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  
    console.log("Tasks:");
    for (const task of tasks) {
      const status = task.complete ? "Completed" : "Pending";
      console.log(
        `${task.title} - ${task.description} (${task.dueDate.toDateString()}) - ${status}`
      );
    }
  }
  
  function updateTask( newTitle, newDescription, newDueDate) {
    // const taskIndex = taskId - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks[taskIndex].title = newTitle || tasks[taskIndex].title;
      tasks[taskIndex].description = newDescription || tasks[taskIndex].description;
      tasks[taskIndex].dueDate = newDueDate || tasks[taskIndex].dueDate;
      console.log("Task updated successfully!");
    } else {
      console.log("Invalid task ID!");
    }
  }
  
  function markCompleted(taskId) {
    const taskIndex = taskId - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks[taskIndex].complete = true;
      console.log("Task marked as completed!");
    } else {
      console.log("Invalid task ID!");
    }
  }
  
  function deleteTask(taskId) {
    const taskIndex = taskId - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks.splice(taskIndex, 1);
      console.log("Task deleted successfully!");
    } else {
      console.log("Invalid task ID!");
    }
  }
  

  