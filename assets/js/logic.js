// Event listener to handle key press events, such as Enter key for submitting initials
function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighScore();
    }
}

// Event listener to start the quiz when the "Start" button is clicked
startButton.addEventListener("click", startQuiz);

// Event listener to save the high score when the "Submit" button is clicked
submitButton.addEventListener("click", saveHighScore);

// Function to start the quiz
function startQuiz() {
    // Hide the start screen
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    // Display the questions
    questionsElement.removeAttribute("class");

    // Start the timer
    timerID = setInterval(clockTick, 1000);
    timerElement.textContent = time;

    // Display the first question
    getQuestion();
}

// Function to display a question
function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    // Update the question title
    let titleElement = document.getElementById("question-title");
    titleElement.textContent = currentQuestion.title;

    // Clear the previous choices
    choicesElement.innerHTML = "";

    // Create buttons for each choice
    currentQuestion.choices.forEach(function (choice, index) {
        let choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = `${index + 1}. ${choice}`;
        choiceButton.addEventListener("click", questionClick);
        choicesElement.append(choiceButton);
    });
}

// Function to handle a question choice click
function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        // Decrease time for wrong answers
        time -= 15;
        if (time < 0) {
            time = 0;
        }
        timerElement.textContent = time;
        feedbackElement.textContent = "Wrong";
    } else {
        feedbackElement.textContent = "Correct!";
        // Play a correct sound effect
        sfx.play();
    }

    feedbackElement.setAttribute("class", "feedback");

    // Hide the feedback after 1 second
    setTimeout(function () {
        feedbackElement.setAttribute("class", "feedback hide");
    }, 1000);

    currentQuestionIndex++;

    // Check if all questions are answered
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        // Display the next question
        getQuestion();
    }
}

// Function to end the quiz
function quizEnd() {
    clearInterval(timerID);

    // Show the end screen
    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    // Display the final score
    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    // Hide the questions
    questionsElement.setAttribute("class", "hide");
}

// Function to update the timer
function clockTick() {
    time--;
    timerElement.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}
