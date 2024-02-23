// import prompt from 'prompt'

// const prompt = require('prompt');



var quiz =[
    {
        question:"what is the git command to stage new changes in <directory>",
        answer1:"git clone <repo>",
        answer2:"git add <directory>",
        answer3:"git commit <directory>",
    },
    {
        question:"what is the git command to list all your branches in your repo",
        answer1:"git status",
        answer2:"git stash",
        answer3:"git branch",
    },
    {
        question:"what is the git command to clone a remote repository to your local machine",
        answer1:"git clone <url>",
        answer2:"git add <directory>",
        answer3:"git clone <repo>",
    },
    {
        question:"what is the git command to Show the history of commits in the repository",
        answer1:"git log",
        answer2:"git init",
        answer3:"git stash",
    },
    {
        question:"what is the git command to Switch to a different branch",
        answer1:"git branch <branch_name>",
        answer2:"git checkout <branch_name>",
        answer3:"git merge <branch_name>",
    },
]


let randomNum = Math.floor(Math.random() * 4);
console.log(randomNum)

// let choose = prompt("Choose the correct answer!") 
// console.log("Awesome!")

// function askQuestion(question) {
//     return prompt(question);
// }
// askQuestion(quiz[randomNum].question)


switch (randomNum) {
    case 0:
    console.log(quiz[randomNum])
    break;
    case 1:
    console.log(quiz[randomNum])
    break;
    case 2:
    console.log(quiz[randomNum])
    break;
    case 3:
    console.log(quiz[randomNum])
    break;
    case 4:
    console.log(quiz[randomNum])
    break;
};

let  correct = (quiz[0].question === "answer2")? console.log("Correct!") : console.log("Wrong! the correct answer is : git add <directory>");
correct = (quiz[1].question === "answer3")? console.log("Correct!") : console.log("Wrong! the correct answer is : git branch");
correct = (quiz[2].question === "answer1")? console.log("Correct!") : console.log("Wrong! the correct answer is : git clone <url>");
correct = (quiz[3].question === "answer1")? console.log("Correct!") : console.log("Wrong! the correct answer is : git log");
correct = (quiz[4].question === "answer2")? console.log("Correct!") : console.log("Wrong! the correct answer is : git checkout <branch_name>");

// correct = (quiz[random].question === "answer3")?
