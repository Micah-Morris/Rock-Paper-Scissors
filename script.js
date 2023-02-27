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
console.log('The Computer chose ' + computerChoice);


console.log('You chose ' + playerChoice);



computerChoice = computerChoice.toLowerCase()
playerChoice = playerChoice.toLowerCase()

if (computerChoice ==  playerChoice) {
    console.log('A Draw!');
}

if (playerChoice == 'paper' && computerChoice == 'rock') {
    console.log('You Win')
    wins++

}
if (playerChoice == 'paper' && computerChoice == 'scissors') {
    console.log('You Lose');
    losses++

}
if (playerChoice == 'rock' && computerChoice == 'scissors') {
    console.log('You Win')
    wins++

}
if (playerChoice == 'rock' && computerChoice == 'paper') {
    console.log('You Lose')
    losses++

}

if (playerChoice == 'scissors' && computerChoice == 'paper') {
    console.log('You Win')
    wins++

}
if (playerChoice == 'scissors' && computerChoice == 'rock') {
    console.log('You Lose')
    losses++ 
}

if (wins > losses) {
    console.log('You Won the Contest');
}
else if (losses > wins) {
    console.log('You Lost the Contest');
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