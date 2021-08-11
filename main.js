/* Randomization of computer's choices */

function computerPlay() {
    var playArray = [
       "Rock",
       "Paper",
       "Scissors"
    ];
    var randomNumber = Math.floor(Math.random()*playArray.length);
    return playArray[randomNumber];
}

/* The user playing a round of rock, paper, scissors */

function playRound(playerSelection, computerSelection) {
    var x = playerSelection.toUpperCase();
    var y = computerSelection.toUpperCase();

/* The rock, paper, scissors event chain */

if (x == "ROCK" && y == "SCISSORS") {
    return "You Win! Rock beats Scissors!";
}
else if (x == "PAPER" && y == "ROCK") {
    return "You Win! Paper beats Rock!";
}
else if (x == "SCISSORS" && y == "PAPER") {
    return "You Win! Scissors beats Paper!"
}

if (x == "ROCK" && y == "PAPER") {
    return "You Lose! Paper beats Rock!";
}
else if (x == "PAPER" & y == "SCISSORS") {
    return "You Lose! Scissors beats Paper!";
}
else if (x == "SCISSORS" && y == "ROCK") {
    return "You Lose! Rock beats Scissors!"
}

if (x == "ROCK" && y == "ROCK") {
    return "It's a Draw! Try again!";
}
else if (x == "PAPER" && y == "PAPER") {
    return "It's a Draw! Try again!";
}
else if (x == "SCISSORS" && y == "SCISSORS") {
    return "It's a Draw! Try again!"
}
else return "Please enter your choices!";
}
