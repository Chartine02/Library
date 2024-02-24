const askQuestion = require('prompt-sync')();
const quiz = [
    {
        question: "What is the git command to stage new changes in <directory>?",
        options: [
            "git clone <repo>",
            "git add <directory>",
            "git commit <directory>"
        ],
        correctAnswer: "git add <directory>"
    },
    {
        question: "What is the git command to list all your branches in your repo?",
        options: [
            "git status",
            "git stash",
            "git branch"
        ],
        correctAnswer: "git branch"
    },
    {
        question: "What is the git command to clone a remote repository to your local machine?",
        options: [
            "git clone <url>",
            "git add <directory>",
            "git clone <repo>"
        ],
        correctAnswer: "git clone <url>"
    },
    {
        question: "What is the git command to Show the history of commits in the repository?",
        options: [
            "git log",
            "git init",
            "git stash"
        ],
        correctAnswer: "git log"
    },
    {
        question: "What is the git command to Switch to a different branch?",
        options: [
            "git branch <branch_name>",
            "git checkout <branch_name>",
            "git merge <branch_name>"
        ],
        correctAnswer: "git checkout <branch_name>"
    }
];

let score = 0;

const displayQuestions = () => {
    for (let i = 0; i < quiz.length; i++) {
        let questionIndex = i
        // let questionIndex = Math.floor(Math.random() * quiz.length);
        let currentQuestion = quiz[questionIndex];

        console.log(currentQuestion.question);
        currentQuestion.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });

        let userAnswer = askQuestion("Enter your answer: ").toLowerCase();
        if (userAnswer === currentQuestion.correctAnswer.toLowerCase()) {
            console.log("Correct!");
            score++;
        } else {
            console.log("Incorrect. The correct answer is: " + currentQuestion.correctAnswer);
        }
    }
};

displayQuestions();

console.log(`Your final score is: ${score}/${quiz.length}`);