

const askQuestion = require('prompt-sync');
const prompt = askQuestion()

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

/ const displayQuestions = () => {
        for(i =0; i <quiz.length; i++){
            console.log(quiz[i])
            questionIndex = 
            let choose = prompt("Choose the correct answer!")
            }
        }
}
let score = 0;
let questionIndex = 0;

function displayRandomQuestion() {
    const randomIndex = Math.
    floor(Math.random() * quiz.length);
    const currentQuestion = quiz[randomIndex];

    questionIndex = randomIndex; // Store for later use

    // Display the question and shuffle the answer options
    console.log(currentQuestion.question);
    const shuffledAnswers = shuffleArray([currentQuestion.answer1, currentQuestion.answer2, currentQuestion.answer3]);
    for (let i = 0; i < shuffledAnswers.length; i++) {
        console.log(`${i + 1}. ${shuffledAnswers[i]}`);
    }
}

function shuffleArray(array) {
    const shuffled = array.slice(0); // Create a copy to avoid modifying the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function checkAnswer(userInput) {
    const expectedAnswer = quiz[questionIndex].correctAnswer; // Use previously stored index
    const userAnswer = parseInt(userInput, 10); // Convert to number

    if (userAnswer === expectedAnswer) {
        console.log("Correct!");
        score++;
    } else {
        console.log("Incorrect. The correct answer is:", quiz[questionIndex].answer1, quiz[questionIndex].answer2, quiz[questionIndex].answer3)[expectedAnswer - 1]; // Provide correct answer
    }
}

// Start the quiz
displayRandomQuestion();

let answer;
while ((answer = prompt("Enter your answer (number):")) !== null) {
    checkAnswer(answer);
    displayRandomQuestion();
}

// Display final score
console.log("Final score:", score, "/", quiz.length)

// questionIndex =quiz[i]

// const displayQuestions = () => {
//     for(i =0; i <quiz.length; i++){
//         console.log(quiz[i])
//         questionIndex = 
//         let choose = prompt("Choose the correct answer!")
//         for (choose in quiz){if (quiz[1] === "answer2"){
//             console.group("correct!")
//         }else if (quiz[2] === 'answer1'){
//             console.log('Wrong')
//         }
//         }
//         // } console.log("Correct!") : console.log("Wrong! the correct answer is : git add <directory>");
//         // correct = (quiz[i] === "answer3")? console.log("Correct!") : console.log("Wrong! the correct answer is : git branch");
//         // correct = (quiz[2] === "answer1")? console.log("Correct!") : console.log("Wrong! the correct answer is : git clone <url>");
//         // correct = (quiz[3] === "answer1")? console.log("Correct!") : console.log("Wrong! the correct answer is : git log");
//         // correct = (quiz[4] === "answer2")? console.log("Correct!") : console.log("Wrong! the correct answer is : git checkout <branch_name>");}
//     }
// }
// displayQuestions()



// // let randomNum = Math.floor(Math.random() * 4);
// // console.log(randomNum)

// // function askQuestion(question) {
// //     return prompt(question);
// // }
// // askQuestion(quiz[randomNum].question)


// // switch (randomNum) {
// //     case 0:
// //     console.log(quiz[randomNum])
// //     break;
// //     case 1:
// //     console.log(quiz[randomNum])
// //     break;
// //     case 2:
// //     console.log(quiz[randomNum])
// //     break;
// //     case 3:
// //     console.log(quiz[randomNum])
// //     break;
// //     case 4:
// //     console.log(quiz[randomNum])
// //     break;
// // };



// // let  correct = (quiz[1] === "answer2")? console.log("Correct!") : console.log("Wrong! the correct answer is : git add <directory>");
// // correct = (quiz[1] === "answer3")? console.log("Correct!") : console.log("Wrong! the correct answer is : git branch");
// // correct = (quiz[2] === "answer1")? console.log("Correct!") : console.log("Wrong! the correct answer is : git clone <url>");
// // correct = (quiz[3] === "answer1")? console.log("Correct!") : console.log("Wrong! the correct answer is : git log");
// // correct = (quiz[4] === "answer2")? console.log("Correct!") : console.log("Wrong! the correct answer is : git checkout <branch_name>");

// // correct = (quiz[random].question === "answer3")?
