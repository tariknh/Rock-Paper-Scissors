console.log('hELlo Wold!');
let gameHands = ['Rock','Paper','Scissors'];
let player;
let computer;
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
let hand;
let handChoice;
const resultDiv = document.getElementById('result');
const resultText = document.createElement('h1');
let playerScore = 0;
let computerScore = 0;
const playerScoreDiv = document.getElementById('playerCount');
const computerScoreDiv = document.getElementById('computerCount');
const playerScoreText = document.createElement('h2');
const computerScoreText = document.createElement('h2');
playerScoreDiv.appendChild(playerScoreText);
computerScoreDiv.appendChild(computerScoreText);

function getComputerChoice(){
    return gameHands[Math.floor(Math.random()*gameHands.length)];
}
let computerSelection = getComputerChoice();


function playGame(playerSelection,computerSelection){

    resultDiv.appendChild(resultText);
    resultText.textContent = "";
    resultText.className = "";
    console.log(playerScore);
    console.log(computerScore);



    if (playerSelection == computerSelection){
        resultText.textContent = "Tie!";
        resultText.className = "tie";
    }

    else if (playerSelection == 'Rock' && computerSelection !== 'Paper' ){
        resultText.textContent =`You win! ${playerSelection} beats ${computerSelection}.`;
        resultText.className = "win";
        playerScore += 1;
    }

    else if (playerSelection == 'Paper' && computerSelection !== 'Scissors'){
        resultText.textContent =`You win! ${playerSelection} beats ${computerSelection}.`;
        resultText.className = "win";
        playerScore += 1;

    }

    else if (playerSelection == 'Scissors' && computerSelection !== 'Rock'){
        resultText.className = "win";
        resultText.textContent =`You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore += 1;
    }

    else{
        resultText.className = "lose";
        resultText.textContent =`You lose. ${computerSelection} beats ${playerSelection}.`;
        computerScore += 1;
    }
    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;

    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        resultText.className = "win";
        resultText.textContent = "You are the winner!";
        computerScoreText.textContent = 0;
        playerScoreText.textContent = 0;
    }
    
    if (computerScore == 5) {
        playerScore = 0; 
        computerScore = 0;
        resultText.className = "lose";
        resultText.textContent = "You lost...";
        computerScoreText.textContent = 0;
        playerScoreText.textContent = 0;
    }

    return;
    
};
for (const button of buttons){
    button.addEventListener("click",e => {
        hand = e.target.id;
        return playGame(hand,getComputerChoice());
    });
    //console.log(button);
}

/*
function game(){
    for (let i= 0; i<5; i++){
        playerSelection = prompt('Choose your hand, Rock Paper or Scissors?','');
        playGame(playerSelection, computerSelection);
    }
}
game();
console.log(playGame(playerSelection, computerSelection));
*/

