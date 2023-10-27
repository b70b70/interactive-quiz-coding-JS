// Function to print high scores from local storage
function printHighScore() {
    // Retrieve high scores from local storage or create an empty array if none
    let highScores = JSON.parse(localStorage.getItem("highscores")) || [];

    // Sort high scores in descending order based on the score value
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    // Display each high score in an ordered list (OL) on the page
    highScores.forEach(function(score) {
        // Create a list item (LI) for each high score
        let li = document.createElement("li");

        // Set the LI's text content to display initials and score
        li.textContent = `${score.initials} - ${score.score}`;

        // Get the ordered list (OL) element on the page
        let ol = document.getElementById("highscores");

        // Append the LI to the OL to display the high score
        ol.appendChild(li);
    });
}

// Function to clear high scores from local storage
function clearHighScores() {
    // Remove the "highscores" item from local storage, effectively clearing high scores
    localStorage.removeItem("highscores");

    // Reload the current web page to reflect the cleared high scores
    window.location.reload();
}

// Get a reference to the "Clear High Scores" button on the page
let clearButton = document.getElementById("clear");

// Add a click event listener to the button to trigger the clearing of high scores
clearButton.addEventListener("click", clearHighScores);

// Call the printHighScore function to display high scores on the page
printHighScore();
