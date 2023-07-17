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

let pScore, cScore;
pScore = 0;
cScore = 0;

function game() {
    let i = 0;
    while(i!=5) {

        let choice = prompt("Best of 5! Pick one: rock, paper, scissors")
        const playerSelection = choice.toLowerCase();
        const computerSelection = getComputerChoice();
    
        console.log(computerSelection)
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        
    
        if(result.includes("win")){
            ++pScore;
        }
        else if(result.includes("lose"))
            ++cScore;
        i++;
    }

}

game()

if(pScore>cScore) {
    console.log("Your score is " + pScore + " computer's score is " + cScore + " YOU WIN!")
}
else if(cScore>pScore) {
    console.log("Your score is " + pScore + " computer's score is " + cScore + " YOU LOSE!")
}
else {
    console.log("Your score is " + pScore + " computer's score is " + cScore + " IT'S A TIE!")
}
