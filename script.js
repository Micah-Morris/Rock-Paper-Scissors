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

