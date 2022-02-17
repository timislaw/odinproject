const displayOnPage = function (message) {
  const el = document.createElement("p");
  el.textContent = message;
  const output = document.getElementById("output");
  output.appendChild(el);
};

//rock paper scissors
//computer function for choosing rock paper scissors
// if random number 1, rock; if random number 2, return paper; if random number 3; return scissors
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

//1 global variable that is an array of objects, roshambo tally of wins per cpu

const roShamBo = [
  {
    ro: "rock",
    sham: "paper",
    bo: "scissors",
  },
  {
    compOneWins: 0,
    compTwoWins: 0,
  },
];

//function that generates random number that equates to ro, sham, or bo

const computerPlay = function () {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let selection = randomNumber;
  if (selection === 1) {
    return `${roShamBo[0].ro}`;
  } else if (selection === 2) {
    return `${roShamBo[0].sham}`;
  } else {
    return `${roShamBo[0].bo}`;
  }
};

//function returns which hand wins or 0 for draw
const findWinner = function (handOne, handTwo) {
  if (handOne.includes(handTwo)) {
    return 0; //draw
  } else if (handOne.includes("rock") && handTwo.includes("scissors")) {
    return 1; //hand one
  } else if (handTwo.includes("rock") && handOne.includes("scissors")) {
    return 2; //hand two
  } else if (handOne.includes("scissors") && handTwo.includes("paper")) {
    return 1;
  } else if (handTwo.includes("scissors") && handOne.includes("paper")) {
    return 2;
  } else if (handOne.includes("paper") && handTwo.includes("rock")) {
    return 1;
  } else if (handTwo.includes("paper") && handOne.includes("rock")) {
    return 2;
  }
};

//function that pits 2 computers against eachother and runs the computerplay function in each
// for x amount of games, play computerPlay function for each computer
//

const bestOf = function (x) {
  for (let i = 0; i < x; i++) {
    let cpuOnePlay = computerPlay();
    let cpuTwoPlay = computerPlay();
    displayOnPage(cpuOnePlay);
    displayOnPage(cpuTwoPlay);
    let winner = findWinner(cpuOnePlay, cpuTwoPlay);
    if (winner === 1) {
      roShamBo[1].compOneWins++;
      displayOnPage("--player one wins--");
    } else if (winner === 2) {
      roShamBo[1].compTwoWins++;
      displayOnPage("--player two wins--");
    } else if (winner === 0) {
      displayOnPage("--this is a draw--");
    }
  }
  displayOnPage(
    `Results: Computer One wins: ${roShamBo[1].compOneWins} & Computer Two wins: ${roShamBo[1].compTwoWins}`
  );
};

bestOf(100);

