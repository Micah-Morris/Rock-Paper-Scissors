function getComputerChoice(choice) {
    return choice [Math.floor(Math.random() * choice.length)]
    
}
var choice = ['Rock', 'Paper', 'Scissors'];
console.log(getComputerChoice (choice));
