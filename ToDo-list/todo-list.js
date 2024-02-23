// Task object with description and category
function Task(description, category) {
    this.description = description;
    this.category = category;
    this.completed = false; // Initially mark as incomplete
    return Task
  }
  
  // To-Do list object with tasks and methods
  function ToDoList() {
    this.tasks = [];
  
    // Add a task with description and category
    this.addTask = (description, category) => {
      this.tasks.push(new Task(description, category));
    };
  
    // Display tasks grouped by category
    this.displayTasks = () => {
      const groupedTasks = {};
      for (const task of this.tasks) {
        groupedTasks[task.category] = groupedTasks[task.category] || [];
        groupedTasks[task.category].push(task);
      }
  
      for (const category in groupedTasks) {
        console.log(`**${category}**`);
        groupedTasks[category].forEach((task) => {
          const status = task.completed ? "[DONE]" : "";
          console.log(`- ${task.description} ${status}`);
        });
      }
    };
  
    // Mark a task as completed by description
    this.markCompleted = (description) => {
      const taskIndex = this.tasks.findIndex((task) => task.description === description);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].completed = true;
        console.log(`Task "${description}" marked as completed.`);
      } else {
        console.log(`Task "${description}" not found.`);
      }
    };
  
    // Remove a task by description
    this.removeTask = (description) => {
      const taskIndex = this.tasks.findIndex((task) => task.description === description);
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
        console.log(`Task "${description}" removed from the list.`);
      } else {
        console.log(`Task "${description}" not found.`);
      }
    };
  }
  
  // Create a To-Do list and add some tasks
  const myToDoList = new ToDoList();
  myToDoList.addTask("Buy groceries", "Chores");
  myToDoList.addTask("Finish project", "Work");
  myToDoList.addTask("Read a book", "Leisure");
  
  // Display tasks
  myToDoList.displayTasks();
  
  // Mark a task completed
  myToDoList.markCompleted("Buy groceries");
  
  // Display updated tasks
  myToDoList.displayTasks();
  
  // Remove a task
  myToDoList.removeTask("Finish project");
  
  // Display tasks after removal
  myToDoList.displayTasks();
  