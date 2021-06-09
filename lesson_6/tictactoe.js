
const readline = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 5;
const scoreCache = {Player: 0, Computer: 0};
const WINNING_LINES = 
[
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],[1, 5, 9], [3, 5, 7]
];

let prompt = msg => console.log(`=> ${msg}`);

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function joinOr(arr, delimeter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return `${arr.join(delimeter)
        .replace(/.$/, word)} ${arr[arr.length - 1]}`;
  }
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function displayCurrentWinner(currentWinner) {
  if (currentWinner === 'Player') {
    scoreCache.Player += 1;
    prompt(`${currentWinner} won!`);
    console.log("   ~~~~~~~~~~~~~");
    console.log(" ");
  } else if (currentWinner === 'Computer') {
    scoreCache.Computer += 1;
    prompt(`${currentWinner} won!`);
    console.log("   ~~~~~~~~~~~~~");
    console.log(" ");
  } else {
    prompt("It's a tie!");
    console.log("   _____________");
    console.log(" ");
  }
}

function resetScore() {
  scoreCache.Player = 0;
  scoreCache.Computer = 0;
}

function displayCurrentScore() {
  console.log(`Player has ${scoreCache.Player} point!`);
  console.log(`Computer has ${scoreCache.Computer} point!`);
}

function displayFinalResults() {
  if (scoreCache.Player >= WINNING_SCORE) {
    console.log(`Congratulations! You won the overall Match!`);
    resetScore();
    console.log(`<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log();
  } else if (scoreCache.Computer === WINNING_SCORE) {
    resetScore();
    prompt(`COMPUTER  You won the overall Match!`);
    console.log(`<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log();
  }
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER) {
      return 'Player';
    } else if (
             board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER
      && board[sq3] === COMPUTER_MARKER) {
      return 'Computer';
    }
  }
  return null;
}

function randomComputerChoice(board, square) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  square = emptySquares(board)[randomIndex];
  return square;
}

function findAtRiskSquare(board, marker) {
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    let markersInLine = line.map(square => board[square]);

    if (markersInLine.filter(val => val === marker).length === 2) {
      let unusedSquare = line
                .find(square => board[square] === INITIAL_MARKER);
      if (unusedSquare !== undefined) {
        return unusedSquare;
      }
    }
  }

  return null;
}

function choosSquareFive(board) {
  let square = board[5];
  if (square !== INITIAL_MARKER) return null;
  if (square === INITIAL_MARKER) square = '5';
  return square;
}

function computerChoosesSquare(board) {
  let square;
  let winningSquare = findAtRiskSquare(board, COMPUTER_MARKER);
  let riskSquare = findAtRiskSquare(board, HUMAN_MARKER);

  square = winningSquare;
  if (!square) square = riskSquare;
  if (!square) square = choosSquareFive(board);
  if (!square) square = randomComputerChoice(board);

  board[square] = COMPUTER_MARKER;
}

let playerChoosesSquare = function(board) {
  let square;
  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
};

function currentPlayer(board) {
  prompt("Press 'p' if you choose to start the game. Press 'c' if you prefer the computer start the game: ");
  let choose = readline.question().toLocaleLowerCase();
  let firstPlayer = ['p', 'player', 'c', 'computer'];

  while (!firstPlayer.includes(choose)) {
    prompt("Please select 'p' or 'c' ");
    choose = readline.question().toLocaleLowerCase();
  }

  if (choose[0] === 'p') playerChoosesSquare(board);
}

function isGameOn() {
  prompt('Play again? (yes or no)');
  let answer = readline.question().toLowerCase();
  let choices = ['yes','y','no','n'];

  while (!choices.includes(answer)) {
    prompt("That is not a valid choice");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') answer = false;

  return answer;
}

do {
  let board = initializeBoard();
  displayBoard(board);
  currentPlayer(board);

  while (true) {
    displayBoard(board);
    computerChoosesSquare(board);
    displayBoard(board);
    if (someoneWon(board) || boardFull(board)) break;

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);
  let currentWinner = detectWinner(board);
  displayCurrentWinner(currentWinner);
  displayCurrentScore();
  displayFinalResults(currentWinner);

} while (isGameOn());

prompt('Thanks for playing Tic Tac Toe!');
