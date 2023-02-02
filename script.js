//computer chooses rock paper or scissors
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

}
if (playerChoice == 'paper' && computerChoice == 'scissors') {
    console.log('You Lose');

}
if (playerChoice == 'rock' && computerChoice == 'scissors') {
    console.log('You Win')

}
if (playerChoice == 'rock' && computerChoice == 'paper') {
    console.log('You Lose')

}

if (playerChoice == 'scissors' && computerChoice == 'paper') {
    console.log('You Win')

}
if (playerChoice == 'scissors' && computerChoice == 'rock') {
    console.log('You Lose');
}
