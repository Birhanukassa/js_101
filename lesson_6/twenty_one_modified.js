/*  Throughout the codebase, There are untrimmed lines of code (left vacant
    between display logs). they are Intentionally omitted blanks. I did it
    solely for a  better UI experience.*/
const readline = require("readline-sync");
const PLAYER_WINNING_GOAL = 21;
const DEALER_WINNING_GOAL = 17;
let gameScore = { player: 0, dealer: 0 };
const WINNING_SCORE = 5;

function prompt(print = " ") {
  return console.log("🢥 ", print);
}

const goodByeMessage = () => prompt("Thank you for visiting. Goodbye. 🙌");

function initializeDeck() {
  const deck = [];
  const suits = ['♥', '♦', '♣', '♠'];
  const cards = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  const hasTenPoints = ['Jack', 'Queen', 'King'];

  for (let suit in suits) {
    for (let card in cards) {
      let Suit = suits[suit];
      let value = cards[card];
      let point = card % 10;
      if (hasTenPoints.includes(value)) {
        point = 10;
      } else {
        point += 1;
      }

      deck.push({ suit: Suit, value: value, points: point });
    }
  }

  return deck;
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
  return currentPlayer.reduce((card, { points }) => card + points, 0);
}

function hitCard(deck, currentPlayer) {
  let newCard = (deck).pop();
  currentPlayer.push(newCard);
  return currentPlayer;
}

function hideDealerCard(dealer) {
  let coveredCard = [...dealer];
  coveredCard[1] = 'Unknown Card';
  return coveredCard;
}

function displayGivenCards(player, dealer, value) {
  player = objectToString(player);
  dealer = hideDealerCard(objectToString(dealer));
  prompt(`You have:          ${joinAnd(player)} with ${value} points`);
  prompt(`Dealer has:        ${joinAnd(dealer)}`);
  console.log("");
}

function dealingCards(deck) {
  let [firstCard, secondCard] = shuffle(deck);
  return [firstCard, secondCard];
}

function validatingStayOrHit() {
  prompt("Type 'h' if you want to hit or 's' if you you wish to stay.");
  const hitOrStay = ['h', 'hit', 's', 'stay'];
  let input = readline.question().toLowerCase();

  while (!hitOrStay.includes(input)) {
    prompt("Please type the correct word.");
    input = readline.question().toLowerCase();
  }

  return input;
}

function objectToString(cards) {
  let copyOfCards = [...cards];

  copyOfCards = copyOfCards.map(card => {
    return [card.suit, card.value].join(' ');
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
      return `${copyOfCards.join(',  ')}${joinWith + isLastCard}`;
  }
}

function dealerTurn(deck, dealer) {
  let dealerValue = sumOfCards(dealer);

  while (dealerValue <= 17) {
    prompt("                   Dealer Hits!");
    console.log("");
    let updatedDealerValue = sumOfCards(hitCard(deck, dealer));
    dealerValue = updatedDealerValue;

    prompt(`Now Dealer's cards becomes:   ${joinAnd(objectToString(dealer))}`);
    prompt(`Dealer current becomes:   ${dealerValue} points.`);

    if (dealerValue >= 17) {
      console.log("");
      prompt("                   Dealer choose to stay!");
      console.log("");
      break;
    }

  }

  return dealerValue;
}

function playerTurn(deck, player, value) {
  while (true) {
    let input = validatingStayOrHit();
    if (input === 'h') {
      prompt("                   You choose to Hit!");
      console.log("");
      player = hitCard(deck, player);
      value = sumOfCards(player);
      prompt(`Your current Cards are:   ${joinAnd(objectToString(player))}.`);
      prompt(`Your current points are:   ${value} points.`);
    }

    if (input === 's' || value >= PLAYER_WINNING_GOAL) {
      if (input === 's') prompt("                   You choose to stay!");
      console.log("");
      break;
    }
  }

  return value;
}

function isWinner(playerValue, dealerValue) {
  if (isBusted(playerValue)) return "Dealer Wins! ✅  You are BUSTED ❌";
  if (isBusted(dealerValue)) return "You Win! ✅  Dealer BUSTED ❌";

  if ((playerValue === PLAYER_WINNING_GOAL) || (playerValue > dealerValue)) {
    return "You are a Winner! ✅";
  } else if (
    (dealerValue === DEALER_WINNING_GOAL) || (dealerValue > playerValue)
  ) {
    return "Dealer is a Winner! ✅";
  } else {
    return "The Game is a Tie!";
  }
}

function isGrandWinner() {
  if (gameScore.dealer === WINNING_SCORE) {
    console.log("                      Dealer is a GRAND WINNER! 🏆");
    console.log("                      <<<<<<<<<<<<<>>>>>>>>>>>>>>");
  } else if (gameScore.player === WINNING_SCORE) {
    console.log("                      You are a GRAND WINNER! 🏆");
    console.log("                     <<<<<<<<<<<<<>>>>>>>>>>>>>>");
  }
  restScores();
}

function displayFinalResults(player, playerValue, dealer, dealerValue) {
  prompt(`You have:          ${joinAnd(objectToString(player))} with ${playerValue} points`);
  prompt(`Dealer has:        ${joinAnd(objectToString(dealer))} with ${dealerValue} points`);

  let finalResult = isWinner(playerValue, dealerValue);
  scoreCache(finalResult);

  console.log("");
  prompt(`                   Dealer score ${gameScore.dealer} times.`);
  prompt(`                   You score ${gameScore.player} times.`);
  console.log("");
  if ((
    gameScore.dealer === WINNING_SCORE) || (gameScore.player === WINNING_SCORE
  )) {
    isGrandWinner();
  } else {
    console.log(`                      ${finalResult}`);
    console.log("                      ************************");
    console.log("");
  }
}

const displayWelcomeTo21 = () => {
  console.clear();
  console.log("                       ___ Welcome To Twenty One ___ ");
  console.log("                       =============================");
  console.log("");
  console.log("                       ☝  Rules of the Game Play! ");
  console.log("                       -----------------------------");
  console.log("∎  The goal of blackjack is to beat the dealer's hand without going over 21.");
  console.log("");
  console.log("∎  Face cards are worth 10. Aces are worth 1 or 11, whichever makes a better hand.");
  console.log("");
  console.log("∎  Each player starts with two cards; one of the dealer's cards is hidden.");
  console.log("");
  console.log("∎  To 'hit' is to ask for another card. To 'stay' is to hold your total and end your turn.");
  console.log("");
  console.log("∎  If you go over 21, you bust, and the dealer wins regardless of the dealer's hand");
};

function isGameOne() {
  console.log("");
  console.log("                  🃏 Do you wishes to play the Game? (y or n)");
  console.log("");

  let response = readline.prompt().toLocaleLowerCase();
  const choices = ['y', 'n', 'yes', 'no'];

  while (true) {
    if (!choices.includes(response)) {
      prompt("                  Please type the valid choice");
      response = readline.prompt().toLocaleLowerCase();
    }
    if (response[0] === 'n') goodByeMessage();
    return response[0] === 'y';
  }
}

function scoreCache(finalResult) {
  if (finalResult[0] === 'D') gameScore.dealer += 1;
  if (finalResult[0] === 'Y') gameScore.player += 1;
}

function restScores() {
  gameScore.dealer = 0;
  gameScore.player = 0;
}

do {
  displayWelcomeTo21();
  if (!isGameOne()) break;
  let DEALER = [];
  let PLAYER = [];
  let deck = initializeDeck();

  PLAYER = dealingCards(deck, PLAYER);
  DEALER = dealingCards(deck, DEALER);

  let playerValue = sumOfCards(PLAYER);
  let dealerValue = sumOfCards(DEALER);

  displayGivenCards(PLAYER, DEALER, playerValue);

  console.log("                 .... Your turn ....");
  playerValue = playerTurn(deck, PLAYER, playerValue);

  if (playerValue < PLAYER_WINNING_GOAL) {
    console.log("                 .... Dealer turn ....");
    dealerValue = dealerTurn(deck, DEALER, dealerValue);
  }

  displayFinalResults(PLAYER, playerValue, DEALER, dealerValue);
} while (isGameOne());

