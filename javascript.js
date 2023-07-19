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

//Calls a 5 round game with loop.
/* 
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

*/
//game()
//scoreboard()

function gameOver() {
    if(pScore==5) {
        paragraf.textContent = "YOU WIN!  Computer:  " + cScore + " Player: " + pScore;
        pScore = 0;
        cScore = 0;
    }
    else if(cScore == 5) {;
        paragraf.textContent = "YOU LOSE!  Computer:  " + cScore + " Player: " + pScore;
        pScore = 0;
        cScore = 0;
    }
}



const container = document.querySelector(".result");

const paragraf = document.createElement("p");
const paragraf2 = document.createElement("p");
paragraf.classList.add('paragraf');
paragraf.classList.add('paragraf2');
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



