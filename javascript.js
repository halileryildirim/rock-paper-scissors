// Computer choices a random number, function turns it into an element for the game.
function getComputerChoice() {

    let x = Math.floor(Math.random() * 3);
    let result;
    if (x == 0) {
        return result = "rock";
    }
    else if (x==1) {
        return result = "paper";
    }
    else 
        return result = "scissors";
    
}   

// Function compares the selections of both player and computer. Prints the result.
function playRound(playerSelection, computerSelection) {
    let x = playerSelection;
    let y = computerSelection;
    let result;

    if (x == y) {
        return result = "It's a tie."
    }
    else {
        if (x == "rock" && y == "paper") {
            return result = "You lose paper beats rock!"
        }
        else if (x == "rock" && y == "scissors") {
            return result = "You win rock beats scissors!"
        }
        else if (x == "paper" && y == "scissors") {
            return result = "You lose scissors beats paper"
        }
        else if (x == "paper" && y == "rock") {
            return result = "You win paper beats rock!"
        }
        else if (x == "scissors" && y == "rock") {
            return result = "You lose rock beats scissors"
        }
        else  
            return result = "You win scissors beats paper" 
    }
        
}
// Variables for the computer and player score count.
let pScore, cScore;
pScore = 0;
cScore = 0;

//Calls a 5 round game with loop. 
function game() {
    let i = 0;
    while(i!=5) {

        let choice = prompt("Best of 5! Pick one: rock, paper, scissors")
        const playerSelection = choice.toLowerCase();
        const computerSelection = getComputerChoice();
    
        //console.log(computerSelection) for testing 
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        
        //Updates score with the results.
        if(result.includes("win")){
            ++pScore;
        }
        else if(result.includes("lose"))
            ++cScore;
        i++;
    }

}

game()

//Prints the outcome of scores and the winner.
if(pScore>cScore) {
    console.log("Your score is " + pScore + " computer's score is " + cScore + " YOU WIN!")
}
else if(cScore>pScore) {
    console.log("Your score is " + pScore + " computer's score is " + cScore + " YOU LOSE!")
}
else {
    console.log("Your score is " + pScore + " computer's score is " + cScore + " IT'S A TIE!")
}
