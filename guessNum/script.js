let guessNum = 13;
let userNum = prompt("Guess the number");

while( userNum != guessNum ) {
    userNum = prompt("You guessed Wrong! Guess again ");
}
console.log("Congratulations! You guessed the correct Number");  