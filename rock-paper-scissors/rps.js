//rock paper scissors
//computer function for choosing rock paper scissors
    // if random number 1, rock; if random number 2, return paper; if random number 3; return scissors

let computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    };

};

// console.log(computerPlay());

// declare 2 arrays of objects with player choices and computer choices

const yourChoice = ['rock', 'paper', 'scissors'];

const compChoice = [{
    rock: 'Rock'
    }, {
    paper: 'Paper'
    }, {
    scissors: 'Scissors'
}];

// now write function that plays a single round of rps. function should take two parameters
    // have it return who the victor is
    // let playRound be a function - two parameters, playerSelection and computerSelection
let playerSelection = function (decision) {
    if (decision === 'rock') {
        return compChoice[0];
    } else if (decision === 'paper') {
        return compChoice[1];
    } else if (decision === 'scissors') {
        return compChoice[2];
    } else {
        return window.alert('Did you choose a correct option?');
    };
};


let playRound = function (human) {
    let computer = computerPlay();
    let playerChoice = human;
    

    console.log(playerChoice.toLowerCase());
};

playRound('rOcK')