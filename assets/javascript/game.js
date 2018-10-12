// Letters that can be guessed
var letters = [
    'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Random letter function
function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

// Game conditions
var wins = 0;
var losses = 0;
var guesses = totalGuesses = 9;
var attempts = [];
var winner = getRandomLetter();
console.log("Win condition: " + winner);

// Begin game
document.addEventListener('keyup', function(event) {
    // Gets input from the keyboard
    var input = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("Current guess: " + input);

    // Checks if the input is a letter and hasn't been repeated
    if((letters.indexOf(input) >= 0) && (attempts.indexOf(input) < 0)) {
        // Subtracts the number of guesses and adds in the attempted letter.
        guesses--;
        attempts.push(input);

        // If the number of guesses drops to 0 or if the correct letter was guessed, then the game is over.
        if((winner == input) || (guesses == 0)) {
            // Win count updates
            if(winner == input) {
                wins++;
                document.getElementById("win").innerHTML = wins;
                console.log("Player wins");
            } 
            
            // Loss count updates
            else {
                losses++;
                document.getElementById("lose").innerHTML = losses;
                console.log("Player loses");
            }

            // Resets the guesses, attempts, and gets a new letter.
            guesses = totalGuesses;
            attempts = [];
            winner = getRandomLetter();
            console.log("Win condition: " + winner);
        }

        // Updates the number of guesses and the attempts
        document.getElementById("guess").innerHTML = guesses;
        document.getElementById("attempt").innerHTML = attempts;

    }
});