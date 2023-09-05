    // variables to keep track of quiz state
    let currentQuestionIndex = 0;
    let time = questions.length * 15;
    let timerID;


    // HTML elements
    let questionsElement = document.getElementById("questions");
    let timerElement = document.getElementById("time");
    let choicesElement = document.getElementById("choices");
    let submitButton = document.getElementById("submit");
    let startButton = document.getElementById("start");
    let initialElement = document.getElementById("initials")
    let feedbackElement = document.getElementById ("feedback")

    let sfx = new Audio("assets/sfx/correct.wav")

    function getQuestion(){

    }
    

    function questionClick(){

    }

    
    function quizEnd(){
        clearInterval(timerID);

        let endScreenElement = document.getElementById("end-screen");
        endScreenElement.removeAttribute("class");

        let finalScoreElement = document.getElementById("final-score")
        finalScoreElement.textContent = time;

        questionsElement.setAttribute("class", "hide");
    }

    function clockTick(){
        time--;
        timerElement.textContent = time;

        if(time <= 0){
            quizEnd();
        }
    }

    function startQuiz(){
        let startScreenElement = document.getElementById("start-screen");
        startScreenElement.setAttribute("class", "hide");

        questionsElement.removeAttribute("class");

        timerID = setInterval(clockTick, 1000)
        
    }

    function saveHighScore(){

    }


    function checkForEnter(event){

    }

    startButton.addEventListener("click", startQuiz);
    submitButton.addEventListener("click", saveHighScore);
    initialElement.addEventListener("keyup", checkForEnter)

    
