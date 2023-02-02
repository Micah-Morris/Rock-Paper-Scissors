//computer chooses rock paper or scissors
function getComputerChoice(choice) {
    return choice [Math.floor(Math.random() * choice.length)]
    
}
var choice = ['Rock', 'Paper', 'Scissors'];
var computerChoice = getComputerChoice (choice)
console.log(computerChoice);


let playerChoice = prompt('Rock, Paper, or Scissors?')

if (computerChoice ==  playerChoice) {
    console.log('A Draw!');
}

if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    console.log('You Win')

}
else if (computerChoice == 'Scissors') {
    console.log('You Lose');
}
if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    console.log('You Win')

}
else if (computerChoice == 'Paper') {
    console.log('You Lose');
}
if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    console.log('You Win')

}
else if (computerChoice == 'Rock') {
    console.log('You Lose');
}
