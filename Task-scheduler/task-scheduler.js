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

const markTaskComplete = (title, complete)