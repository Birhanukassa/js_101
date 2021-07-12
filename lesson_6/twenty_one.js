const readline = require("readline-sync");
const PLAYER_WINNING_GOAL = 21;
const DEALER_WINNING_GOAL = 17;
const GRAND_SCORE = 5;
let gameScore = { player: 0, dealer: 0 };

const prompt = print  => console.log("=> ", print);

const displayGameOver = () => prompt(`                   Game Over!                             
                       Thank you for visiting; Goodbye. 👋`);

function initializeDeck() {
  let deck = [];
  const SUITS = ['♥', '♦', '♣', '♠'];
  const CARDS = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  const HAS_TEN_POINTS = ['Jack', 'Queen', 'King'];
  for (let suit = 0; suit < SUITS.length; suit++) {
    for (let card = 0; card < CARDS.length; card++) {
      let point = card % 10;
      if (HAS_TEN_POINTS.includes(CARDS[card])) {
        point = 10;
      } else {
        point++;
      }

      deck.push({ suits: SUITS[suit], value: CARDS[card], points: point });
    }
  }
  return shuffle(deck);
}

function isBusted(currentPayerValue) {
  return currentPayerValue > 21;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }

  return array;
}

function sumOfCards(currentPlayer) {
  let totalPoint = 0;
  currentPlayer.forEach(card => {
    totalPoint += card.points;
    if ((card.value === 'Ace') && (totalPoint < 21)) totalPoint += 10; // Here Ace becomes 11 only if total point not busted
    if ((card.value === 'Ace') && (totalPoint > 21)) totalPoint -= 10; // Here Ace becomes 1 only if total point busted
  });

  return totalPoint;
}

function hitCard(deck, currentPlayer) {
  currentPlayer.push(deck.shift());
  return currentPlayer;
}

function hideDealerCard(dealer) {
  let coveredCard = [...dealer];
  coveredCard[1] = 'Unknown Card';
  return coveredCard;
}

function dealingCards(deck) {
  return [deck.shift(), deck.shift()];
}

function objectToString(cards) {
  let copyOfCards = [...cards];
  copyOfCards = copyOfCards.map(card => {
    return [card.suits, card.value].join(' ');
  });

  return copyOfCards;
}

function joinAnd(cards, joinWith = ' and ') {
  let copyOfCards = [...cards];
  let isLastCard = copyOfCards.splice(-1);

  switch (cards.length) {
    case 0:
      return '';
    case 1:
      return cards[0];
    case 2:
      return cards.join(joinWith);
    default:
      return `${copyOfCards.join(', ')}${joinWith + isLastCard}`;
  }
}

function isWinner(playerValue, dealerValue) {
  let winner;
  if (isBusted(playerValue)) {
    winner = "Dealer Wins! ✅ You are BUSTED ❌";
  } else if (isBusted(dealerValue)) {
    winner = "You Win! ✅ Dealer BUSTED ❌";
  } else if (playerValue > dealerValue) {
    winner = "You Win! ✅";
  } else if (dealerValue > playerValue) {
    winner = "Dealer Wins! ✅";
  } else if (dealerValue === playerValue) {
    winner = "It's a Tie! ❌";
  }
  return winner;
}

function isGrandWinner() {
  if (gameScore.dealer === GRAND_SCORE) {
    prompt(`                   Dealer is a GRAND WINNER! 🏆
                      <<<<<<<<<<<<<>>>>>>>>>>>>>>`);
  } else if (gameScore.player === GRAND_SCORE) {
    prompt(`                   You are a GRAND WINNER! 🏆
                      <<<<<<<<<<<<<>>>>>>>>>>>>>>`);
  }
  resetScores();
}

function displayFinalResults(player, playerValue, dealer, dealerValue) {
  prompt(`You have:          ${joinAnd(objectToString(player))} total of ${playerValue} points`);
  prompt(`Dealer has:        ${joinAnd(objectToString(dealer))} total of ${dealerValue} points`);

  let finalResult = isWinner(playerValue, dealerValue);
  scoreCache(finalResult);
  console.log("");
  prompt(`                   Dealer score ${gameScore.dealer} times.`);
  prompt(`                   You score ${gameScore.player} times.
  
  `);

  if ((
    gameScore.dealer === GRAND_SCORE) || (gameScore.player === GRAND_SCORE
  )) {
    isGrandWinner();
    console.log("");
  } else {
    prompt(`                   ${finalResult}`);
    console.log(`                       *********************************
   `);
  }
}

const instructions = () => {
  console.log(`                       ☝  Rules of the Game Play!   
                       --------------------------- 

    To play the game, you will be given two cards. 
    The goal of the game is to get as close to 21 points possible without going over.
    If you hit ${PLAYER_WINNING_GOAL} points, you win! 
    If the Dealer gets to ${DEALER_WINNING_GOAL} points, the Dealer wins. 
    If you or Dealer go over 21 points, it's a loss.
    If you get to precisely the same points, it's a tie.
    If any of you win ${GRAND_SCORE} times in arrow, you will be a grand winner!

    Good luck! 🎉
             
  `);

};

const displayWelcomeMessage = () => {
  console.log(`
  
                      ___ Welcome To Twenty One ___ 
                      =============================
  `);
  instructions();
};

const playAgain = () => {
  // if its a new game, prompt for instructions
  if (gameScore.dealer === 0 && gameScore.player === 0) {
    displayWelcomeMessage();
    prompt(`                   Starting a new game!
    
   
    `);
    console.log("                       To start a new game, press 'y' or 'n'");
    let response = readline.prompt().toLocaleLowerCase();
    const choices = ['y', 'n', 'yes', 'no'];
  
    while (true) {
      if (!choices.includes(response)) {
        prompt("                  Please type the valid choice");
        response = readline.prompt().toLocaleLowerCase();
      }
      if (response[0] === 'n') displayGameOver();
      return response[0] === 'y';
    }
  } else {
    console.clear();
    prompt(`                     Let's continue the Game!
    `);
  }
};

function isGameOn() {
  prompt("                   to continue the round, press 'y' or 'n'");
  let input = readline.question().toLocaleLowerCase();
  const choices = ['y', 'n', 'yes', 'no'];
  while (true) {
    if (!choices.includes(input)) {
      prompt("                   Please type the valid choice");
      input = readline.question().toLocaleLowerCase();
    }

    if (input[0] === 'y') {
      return true;
    } else if (input[0] === 'n') {
      displayGameOver();
      return false;
    }
  }
}

function scoreCache(finalResult) {
  if (finalResult[0] === 'D') gameScore.dealer += 1;
  if (finalResult[0] === 'Y') gameScore.player += 1;
}

function resetScores() {
  gameScore = { player: 0, dealer: 0 };
}

function hitOrStayValidator() {
  prompt("Type 'h' if you want to hit or 's' if you wish to stay.");
  let input = readline.question().toLowerCase();
  const hitOrStay = ['h', 'hit', 's', 'stay'];

  while (!hitOrStay.includes(input)) {
    prompt("Please type the correct word.");
    input = readline.question().toLowerCase();
  }

  return input;
}

function displayGivenCards(player, dealer, value) {
  dealer = hideDealerCard(objectToString(dealer));
  prompt(`You have:          ${joinAnd(objectToString(player))} total of ${value} points`);
  prompt(`Dealer has:        ${joinAnd(dealer)} Cards`);
  console.log("");
}

function playerTurn(deck, player,value) {
  while (value <= PLAYER_WINNING_GOAL) {
    let input = hitOrStayValidator();
    if (input === 'h') {
      player = hitCard(deck, player);
      prompt(`                   You choose to Hit!
      `);
      value = sumOfCards(player);
      prompt(`Your current Cards are:  ${joinAnd(objectToString(player))}`);
      prompt(`Your current points are: ${value} points`);
      console.log("");
    } else if (input === 's' || value >= PLAYER_WINNING_GOAL) {
      prompt(`                   You choose to stay!`);
      break;
    }
  }

  return value;
}

function dealerTurn(deck, dealer, value) {
  while (value <= DEALER_WINNING_GOAL) {
    console.log("");
    prompt(`                   Dealer choose to Hit!
    `);
    value  = sumOfCards(hitCard(deck, dealer));
    prompt(`Dealer's cards become:  ${joinAnd(objectToString(dealer))}`);
    prompt(`Dealer points become:   ${value}`);

    if (value > DEALER_WINNING_GOAL) {
      console.log("");
      console.log(`                       Dealer chooses to stay!
      `);
      break;
    }
  }

  return value;
}

do {
  playAgain();
  let dealerCards = [];
  let playerCards = [];

  let deck = initializeDeck();
  playerCards = dealingCards(deck);
  dealerCards = dealingCards(deck);

  let playerValue = sumOfCards(playerCards);
  let dealerValue = sumOfCards(dealerCards);

  displayGivenCards(playerCards, dealerCards, playerValue);

  prompt(`                   Your turn ....
  `);
  playerValue = playerTurn(deck, playerCards, playerValue);

  if (playerValue <= PLAYER_WINNING_GOAL) {
    prompt(`                   Dealer turn ....
    `);
    dealerValue = dealerTurn(deck, dealerCards, dealerValue);
  }

  displayFinalResults(playerCards, playerValue, dealerCards, dealerValue);
} while (isGameOn());




