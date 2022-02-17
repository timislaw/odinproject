const displayOnPage = function (message) {
    const el = document.createElement('p');
    el.textContent = message;
    const output = document.getElementById('output');
    output.appendChild(el);
  };

//rock paper scissors
//computer function for choosing rock paper scissors
    // if random number 1, rock; if random number 2, return paper; if random number 3; return scissors

// let computerPlay = function() {
//     let randomNumber = Math.floor(Math.random() * 3) + 1;

//     if (randomNumber === 1) {
//         return 'rock';
//     } else if (randomNumber === 2) {
//         return 'paper';
//     } else {
//         return 'scissors';
//     };

// };

// console.log(computerPlay());

// declare 2 arrays of objects with player choices and computer choices

// const yourChoice = ['rock', 'paper', 'scissors'];

// const compChoice = [{
//     rock: 'Rock'
//     }, {
//     paper: 'Paper'
//     }, {
//     scissors: 'Scissors'
// }];

// now write function that plays a single round of rps. function should take two parameters
    // have it return who the victor is
    // let playRound be a function - two parameters, playerSelection and computerSelection
// let playerSelection = function (decision) {
//     if (decision === 'rock') {
//         return compChoice[0];
//     } else if (decision === 'paper') {
//         return compChoice[1];
//     } else if (decision === 'scissors') {
//         return compChoice[2];
//     } else {
//         return window.alert('Did you choose a correct option?');
//     };
// };


// let playRound = function (human) {
//     let computer = computerPlay();
//     let playerChoice = human;
    

//     console.log(playerChoice.toLowerCase());
// };

// playRound('rOcK')


//project req's
    // write code reflecting what was learned through what we've covered so far.
        // keep global vars to a minimum, mostly block scope, declare strings, numbers, boolean, and objects
        // write at least 2 funcs. 1 function needs to return value to use in other function. displayonpage doesn't count
        // methods do count.
        // implement arrays or array of objects and update them with the methods andrew showed
        //implement looping for meaningful output. let looping be for how many games are played computer vs computer or you input how many random games a cpu v cpu plays
        //make sure output displays on page
        //cannot be learn together code
        //make comments to document work-- practice pseudocode
        // be able to walk through code in devtools
        //submit link to private repo named dev_0



//rock paper scissors
//computer function for choosing rock paper scissors
    // if random number 1, rock; if random number 2, return paper; if random number 3; return scissors

// console.log(computerPlay());

// declare 2 arrays of objects with player choices and computer choices

// now write function that plays a single round of rps. function should take two parameters
    // have it return who the victor is
    // let playRound be a function - two parameters, playerSelection and computerSelection

//1 global variable that is an array of objects, roshambo tally of wins per cpu

const roShamBo = [{
    ro: 'rock',
    sham: 'paper',
    bo: 'scissors'
},{
    compOneWins: 0,
    compTwoWins: 0
}
];

//function that generates random number that equates to ro, sham, or bo

const computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let selection = randomNumber;
    if (selection === 1) {
        return `${roShamBo[0].ro}`;
    } else if (selection === 2) {
        return `${roShamBo[0].sham}`;
    } else {
        return `${roShamBo[0].bo}`;
    };
};

//function returns which hand wins or 0 for draw
const findWinner = function (handOne, handTwo) {
    if (handOne.includes(handTwo)) {
        return 0; //draw
    } else if (handOne.includes('rock') && handTwo.includes('scissors')) {
        return 1; //hand one
    } else if (handTwo.includes('rock') && handOne.includes('scissors')){
        return 2; //hand two
    }  else if (handOne.includes('scissors') && handTwo.includes('paper')) {
        return 1; 
    } else if (handTwo.includes('scissors') && handOne.includes('paper')){
        return 2;
    }  else if (handOne.includes('paper') && handTwo.includes('rock')) {
        return 1;
    } else if (handTwo.includes('paper') && handOne.includes('rock')) {
        return 2;
    };
};

//write function that pits 2 computers against eachother and runs the computerplay function in each
// for x amount of games, play computerPlay function for each computer
    // if one computers rock is greater than other's scissors, tally that computers win
    // else  if one computers rock is greater than other's scissors, tally that computers win
    // else  if one computers scissors is greater than other's paper, tally that computers win
    // else  if one computers paper is greater than other's rock, tally that computers win
    // else it's a draw which doesn't count the points use or
    // after, return winner if greater than loser
const bestOf = function (x) {
    for (let i = 0; i < x; i++) {
        let cpuOnePlay = computerPlay();
        let  cpuTwoPlay = computerPlay();
        // console.log(cpuOnePlay);
        // console.log(cpuTwoPlay);
       let winner = findWinner(cpuOnePlay, cpuTwoPlay);
       if ( winner === 1) {
        roShamBo[1].compOneWins++;
        //  console.log('player one wins')
       } else if (winner === 2) {
        roShamBo[1].compTwoWins++;
        // console.log('player two wins')
       } else if (winner === 0) {
        // console.log('draw');
       };

    };
    console.log(`Results: Computer One wins: ${roShamBo[1].compOneWins} & Computer Two wins: ${roShamBo[1].compTwoWins}`);
};

// roShamBo[1].compOneWins += 1;

// console.log(roShamBo[1].compOneWins)
bestOf(10);
//while comp 1 wins is less than 3 and while comp 2 wins is less than 3
// once one gets to 3, game over this cpu wins

//contains in string