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
        return result = "It's a tie! Computer: " + cScore + " Player: " + pScore;
    }
    else {
        if (x == "rock" && y == "paper") {
            cScore++;
            return result = "You lose paper beats rock! Computer: " + cScore + " Player: " + pScore;   
        }
        else if (x == "rock" && y == "scissors") {
            pScore++;
            return result = "You win rock beats scissors! Computer: " + cScore + " Player: " + pScore;   
        }
        else if (x == "paper" && y == "scissors") {
            cScore++;
            return result = "You lose scissors beats paper! Computer: " + cScore + " Player: " + pScore;
            
        }
        else if (x == "paper" && y == "rock") {
            pScore++;
            return result = "You win paper beats rock! Computer: " + cScore + " Player: " + pScore;
        }
        else if (x == "scissors" && y == "rock") {
            cScore++;
            return result = "You lose rock beats scissors! Computer: " + cScore + " Player: " + pScore;
        }
        else 
            pScore++; 
            return result = "You win scissors beats paper! Computer: " + cScore + " Player: " + pScore;
        
            
    }
        
}
//function to declare winner since if-else blocks not working with DOM
function gameOver() {
    if(pScore==5) {
        paragraf.textContent = "YOU WIN!";
        pScore = 0;
        cScore = 0;
    }
    else if(cScore == 5) {;
        paragraf.textContent = "YOU LOSE!";
        pScore = 0;
        cScore = 0;
    }
}
//DOM elements and declarations
const container = document.querySelector(".result");

const paragraf = document.createElement("p");
paragraf.classList.add('paragraf');
container.appendChild(paragraf);

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

let pScore, cScore;
pScore = 0;
cScore = 0;

rockBtn.addEventListener('click', () => {
    paragraf.textContent = playRound('rock', getComputerChoice())
    gameOver();
});


paperBtn.addEventListener('click', () => {
    paragraf.textContent = playRound('paper', getComputerChoice());
    gameOver();
});


scissorsBtn.addEventListener('click', () => {
    paragraf.textContent = playRound('scissors', getComputerChoice());
    gameOver();
});



