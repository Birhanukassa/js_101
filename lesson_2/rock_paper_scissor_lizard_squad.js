const readline = require('readline-sync');
const WINNING_SCORE = 5;
let computerScore = 0;
let userScore = 0;

let prompt = message => console.log(`=> ${message}`);

const positions = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper'],

  displayChoices() {
    let keys = Object.keys(this).slice(0, 5);
    let formattedMatches = [];

    keys.forEach(Element => {
      formattedMatches.push(`${Element[0]}) for ->`);
      formattedMatches.push(`${Element}`);
    });

    formattedMatches.splice(4, 1, 'k, for ->');
    console.clear('');
    console.log();
    console.log(
      `Pick one of the options available by typing the first alphabet as seen below:\n                 \n${formattedMatches.join(
        ' '
      )}`
    );
  },
};

function spellChecker(choice) {
  let KEY = ['r', 'p', 'k', 's', 'l'];
  choice = readline.question().toLowerCase();

  while (!KEY.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  return (choice);
}

const KEY_CHOICES = Object.keys(positions).slice(0, -1);

function computerChoiceGenerator() {
  let randomIndex = Math.floor(Math.random() * KEY_CHOICES.length);
  let computerChoice = Object.keys(positions)[randomIndex];
  return computerChoice;
}

function matchingLetter(choice) {
  for (let item = 0; item < KEY_CHOICES.length; item++) {
    if (choice === 'k') choice = KEY_CHOICES[2];
    if (choice === 's') choice = KEY_CHOICES[3];
    if (choice === KEY_CHOICES[item][0]) choice = KEY_CHOICES[item];
  }

  return choice;
}

function isGameOn() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer === 'y';
}

function displayCurrentGame(choice, computerChoice) {
  console.log('');
  prompt(`You chose '${choice}' & computer chose '${computerChoice}'`);
  console.log(`   ..........................................`);
  console.log('');
}

function isWinner(choice, computerChoice) {
  if (positions[choice].includes(computerChoice)) return 'choice';
  if (positions[computerChoice].includes(choice)) return 'computerChoice';
  return null;
}

function displayCurrentScore(winner,userScore, computerScore) {
  if (winner === null) prompt("It's a Tie!");
  if (winner === 'choice') {
    prompt(`You win!\n   ========\n You have ${userScore} point/s!\n ...................\nComputer lose with remaining ${computerScore} point/s.`);
    console.log(`.......................................`);
    console.log('');
  } else if (winner === 'computerChoice') {
    prompt(`Computer Win!\n   =============\nComputer has ${computerScore} point/s!\n.......................\nYou lose with remaining ${userScore} point/s.`);
    console.log(`..................................`);
    console.log('');
  } else {
    prompt("It's a Tie!");
    console.log(`..............`);
    console.log('');
  }
}

function scoreCounter(winner) {
  if (winner === 'choice') return userScore++;
  if (winner === 'computerChoice') return computerScore++;
  return null;
}

function displayFinalResults() {
  if (userScore === WINNING_SCORE) {
    console.log(`Congratulations! You are the GRAND WINNER.`);
    userScore = 0;
    computerScore = 0;
    console.log(`<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>`);
    console.log();
  } else if (computerScore === WINNING_SCORE) {
    prompt(`COMPUTER is the GRAND WINNER!`);
    userScore = 0;
    computerScore = 0;
    console.log(`   <<<<<<<<<<<<<<>>>>>>>>>>>>>>>`);
    console.log();
  }
}

do {
  positions.displayChoices();
  let choice = spellChecker();
  choice = matchingLetter(choice);
  let computerChoice = computerChoiceGenerator();
  displayCurrentGame(choice, computerChoice);
  let winner = isWinner(choice, computerChoice);
  scoreCounter(winner);
  displayCurrentScore(winner,userScore, computerScore);
  displayFinalResults();
} while (isGameOn());

