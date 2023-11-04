const questions = [
    {
        question: "Which of the following is a renewable energy source?",
        options: ["Coal", "Solar", "Oil"],
        correctAnswer: "Solar"
    },
    {
        question: "What can individuals do to reduce their carbon footprint?",
        options: ["Use public transportation", "Drive a gas-guzzling car", "Leave lights on when not needed"],
        correctAnswer: "Use public transportation"
    },
    {
        question: "Which of the following is a sustainable practice?",
        options: ["Single-use plastics", "Composting", "Wasting food"],
        correctAnswer: "Composting"
    }
];

let currentPlayer = 1;
let currentQuestion = 0;
let player1Score = 0;
let player2Score = 0;

const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("options");
const optionButtons = document.querySelectorAll("#options button");
const nextButton = document.getElementById("nextButton");

function setQuestion() {
    questionText.textContent = `Question for Player ${currentPlayer}: ${questions[currentQuestion].question}`;
    optionButtons[0].textContent = questions[currentQuestion].options[0];
    optionButtons[1].textContent = questions[currentQuestion].options[1];
    optionButtons[2].textContent = questions[currentQuestion].options[2];
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        if (currentPlayer === 1) {
            player1Score++;
            document.getElementById("score1").textContent = player1Score;
        } else {
            player2Score++;
            document.getElementById("score2").textContent = player2Score;
        }
    }
}

function endGame() {
    questionText.textContent = "Game Over";
    optionsList.style.display = "none";
    nextButton.style.display = "none";
}

setQuestion();

optionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        checkAnswer(questions[currentQuestion].options[index]);

        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            setQuestion();
        } else {
            endGame();
        }

        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
    });
});
