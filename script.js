//computer chooses rock paper or scissors
let wins = 0
let losses = 0

for (let i = 0; i < 5; i++) {
    

function getComputerChoice(choice) {
    return choice [Math.floor(Math.random() * choice.length)]
    
}
var choice = ['Rock', 'Paper', 'Scissors'];
var computerChoice = getComputerChoice (choice)
console.log('The Computer chose ' + computerChoice);


let playerChoice = prompt('Rock, Paper, or Scissors?')
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
}
if (wins > losses) {
    console.log('You Won the Contest');
}
else if (losses > wins) {
    console.log('You Lost the Contest');
}