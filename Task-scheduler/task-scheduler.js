var tasks = [
  {
      title: 'Chore',
      description: 'Wash dishes',
      dueDate: new Date("2024-02-24"),
      complete: false
  },
  {
      title: 'Leisure',
      description: 'Staycation',
      dueDate: new Date("2024-03-30"),
      complete: false
  },
  {
      title: 'Shopping',
      description: 'Buy groceries',
      dueDate: new Date("2024-02-20"),
      complete: false
  },
];

const addTask = (title, description, dueDate, complete = false) => {
  var newTask = {
      title: title,
      description: description,
      dueDate: dueDate,
      complete: complete
  };
  tasks.push(newTask);
};


addTask('Exercise', 'Go for a run', new Date("2024-02-15"));
addTask('Study', 'Read a book', new Date("2024-03-10"));
// console.log(tasks)

const displayTasksSortedByDueDate = () => {
  tasks.sort((a, b) => a.dueDate - b.dueDate);
  tasks.forEach(task => {
      console.log(`${task.title} - Due Date: ${task.dueDate.toLocaleDateString()} - Completed: ${task.complete ? 'Yes' : 'No'}`);
      console.log(`Description: ${task.description}`);
  });
};

// console.log('Tasks sorted by due date:');
// displayTasksSortedByDueDate();

const updateTask = (title, updatedDescription, updatedDueDate, isComplete) => {
  const taskIndex = tasks.findIndex(task => task.title === title);
  if (taskIndex !== -1) {
      tasks[taskIndex].description = updatedDescription;
      tasks[taskIndex].dueDate = updatedDueDate;
      tasks[taskIndex].complete = isComplete;
      console.log(`Task "${title}" has been updated.`);
  } else {
      console.log('Task not found!');
  }
};

// updateTask('Leisure', 'Staycation', new Date("2024-03-30"), true);
// console.log('Tasks after updating:');
// displayTasksSortedByDueDate();

const removeTask = (title) => {
  const taskIndex = tasks.findIndex(task => task.title === title);
  if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      console.log(`Task "${title}" has been removed.`);
  } else {
      console.log('Task not found!');
  }
};

// removeTask('Exercise');

// console.log('Tasks after removal:');
// displayTasksSortedByDueDate();


