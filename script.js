//computer chooses rock paper or scissors
let wins = 0
let losses = 0


var playRound = function(array) {
    let playerChoice = array.toString()
    var choice = ['Rock', 'Paper', 'Scissors'];

    function getComputerChoice(choice) {
    return choice [Math.floor(Math.random() * choice.length)]
    
}
var computerChoice = getComputerChoice (choice)

const computerMove = document.getElementById("computerMove");
computerMove.textContent = 'The Computer chose ' + computerChoice;

const playerMove = document.getElementById('playerMove');
playerMove.textContent = 'You chose ' + playerChoice;

let result = ''


computerChoice = computerChoice.toLowerCase()
playerChoice = playerChoice.toLowerCase()


if (computerChoice ==  playerChoice) {
    result = 'A Draw!';
}

if 
(playerChoice == 'paper' && computerChoice == 'rock' || 
playerChoice == 'rock' && computerChoice == 'scissors' ||
playerChoice == 'scissors' && computerChoice == 'paper' ) {
    result = 'You Win';
    wins++
    

}
if (playerChoice == 'paper' && computerChoice == 'scissors' || 
playerChoice == 'rock' && computerChoice == 'paper' ||
playerChoice == 'scissors' && computerChoice == 'rock') {
    result = ('You Lose');
    losses++

}
const score = document.getElementById('score');
score.textContent = 'Player ' + wins + ' Computer ' + losses

const outcome = document.getElementById('outcome');
outcome.textContent = result;

if (wins >= 5) {
    score.textContent = 'You Won the Contest. Refresh to Play Again.';
}
else if (losses >= 5) {
    score.textContent = 'You Lost the Contest. Refresh to Play Again.';
}
}


document.getElementById("rock")
rock.addEventListener("click", 
function () {playRound (['rock'])}
);

document.getElementById("paper")
paper.addEventListener("click", 
function () {playRound (['paper'])}
);

document.getElementById("scissors")
scissors.addEventListener("click", 
function () {playRound (['scissors'])}
);

