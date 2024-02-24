let todoList = [];


function Task(name, category, completed = false) {
  this.name = name;
  this.category = category;
  this.completed = completed;
}


function addTask(name, category) {
  let task = new Task(name, category);
  todoList.push(task);
}

function displayTasksByCategory() {
  let tasksByCategory = {};
  
  todoList.forEach(task => {
    if(tasksByCategory[task.category]) {
      tasksByCategory[task.category].push(task);
    } else {
      tasksByCategory[task.category] = [task];
    }
  });
  
  for(let category in tasksByCategory) {
    console.log(`Category: ${category}`);
    tasksByCategory[category].forEach(task => {
      let status = task.completed ? 'Completed' : 'Incomplete';
      console.log(`- ${task.name} (${status})`);
    });
  }
}

function markTaskAsCompleted(name) {
  let task = todoList.find(task => task.name === name);
  if(task) {
    task.completed = true;
  } else {
    console.log('Task not found!');
  }
}

function removeTask(name) {
  let index = todoList.findIndex(task => task.name === name);
  if(index !== -1) {
    todoList.splice(index, 1);
  } else {
    console.log('Task not found!');
  }
}


addTask('Buy groceries', 'Personal');
addTask('Complete project', 'Work');
addTask('Call mom', 'Personal');
addTask('Submit report', 'Work');

console.log('Tasks initially:');
displayTasksByCategory();

// console.log('\nMarking "Buy groceries" as completed...');
// markTaskAsCompleted('Buy groceries');

// console.log('\nTasks after marking one completed:');
// displayTasksByCategory();

// console.log('\nRemoving "Call mom" from the list...');
// removeTask('Call mom');

// console.log('\nTasks after removing one:');
// displayTasksByCategory();

