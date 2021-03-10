const readline = require('readline-sync');
const WINNING_SCORE = 5;
let ComputerScore = 0;
let userScore = 0;
let answer = '';

let prompt = message => console.log(`=> ${message}`);

const positions = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper'],

  displayMoveChoices() {
    let keys = Object.keys(this).slice(0, 5);
    let formattedMatches = [];
    keys.forEach(Element => {
      formattedMatches.push(`${Element[0]}, for ->`);
      formattedMatches.push(`${Element}`);
    });

    formattedMatches.splice(4, 1, 'k, for ->');
    console.log(
      `Pick one of the options available by typing the first alphabet as seen below:\n${formattedMatches.join(
        ' '
      )}`
    );
  },

  arbitrator(choice, computerChoice) {
    if (this[choice].includes(computerChoice)) {
      userScore++;
      prompt(`You win!\n   ========\n You have ${userScore} point/s!\n ..................\nComputer lose with remaining ${ComputerScore} point/s.`);
    } else if (choice === computerChoice) {
      prompt("It's a tie!");
    } else {
      ComputerScore++;
      prompt(`Computer Win!\n   =============\nComputer has ${ComputerScore} point/s!\n.......................\nYou lose with remaining ${userScore} point/s.`);
    }
  }
};

function displayCurrentScore(choice, computerChoice) {
  console.log();
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  console.log(`   ....................................`);
  positions.arbitrator(choice, computerChoice);
  console.log(`......................................`);
  console.log();
}

const KEY_CHOICES = Object.keys(positions).slice(0, -2);

function computerChoiceGenerator() {
  let randomIndex = Math.floor(Math.random() * KEY_CHOICES.length);
  let computerChoice = Object.keys(positions)[randomIndex];
  return computerChoice;
}

function matchingLetter (choice) {
  for (let item = 0; item < KEY_CHOICES.length; item++) {
    if (choice === 'k') {
      choice = KEY_CHOICES[2];
    } else if (choice === 's') {
      choice = KEY_CHOICES[3];
    } else if (choice === KEY_CHOICES[item][0]) {
      choice = KEY_CHOICES[item];
    }
  }
  return choice;
}

function spellChecker(choice) {
  choice = readline.question().toLowerCase();
  let KEY = ['r', 'p', 'k', 's', 'l'];

  while (!KEY.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }
  return (choice);
}

function displayFinalResults() {
  if (userScore === WINNING_SCORE) {
    console.log(`Congratulations! You are the GRAND WINNER.`);
    userScore = 0;
    ComputerScore = 0;
    console.log(`<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log();
  } else if (ComputerScore === WINNING_SCORE) {
    prompt(`COMPUTER is the GRAND WINNER!`);
    userScore = 0;
    ComputerScore = 0;
    console.log(`   <<<<<<<<<<<<<<>>>>>>>>>>>>>>>`);
    console.log();
  }
}

function isGameOn() {
  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
}

do {
  positions.displayMoveChoices();
  let choice = spellChecker();
  choice = matchingLetter(choice);
  let computerChoice = computerChoiceGenerator();
  displayCurrentScore(choice, computerChoice);
  displayFinalResults();
} while ((isGameOn() === 'y');


