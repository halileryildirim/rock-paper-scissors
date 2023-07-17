function getComputerChoice() {

    console.log("Hello Function");
    let x = Math.floor(Math.random() * 3);
    let result;

    console.log(x);

    if (x == 0) {
        return result = "rock";
    }
    else if (x==1) {
        return result = "paper";
    }
    else 
        return result = "scissors";
    
}   


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie.")
    }
    else {
        console.log("Tie test.")
    }
        
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection)
