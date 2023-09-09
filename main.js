const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const choices = ['sten', 'sax', 'påse'];
    const randomNumber = Math.floor(Math.random() * 3);
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice.toLowerCase() === userChoice.toLowerCase()) {
        result = 'Det blev oavgjort!';
    } else {
        const winningCombination = {
            sten: 'sax',
            påse: 'sten',
            sax: 'påse'
        };

        result = winningCombination[userChoice.toLowerCase()] === computerChoice.toLowerCase() ? 'Wiii du vann! :D' : 'Du förlorade :(';
    }

    resultDisplay.innerHTML = result;
}
