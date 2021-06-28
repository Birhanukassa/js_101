const readline = require("readline-sync");
const PLAYER_WINNING_GOAL = 21;
const DEALER_WINNING_GOAL = 17;
const gameScore = { player: 0, dealer: 0 };
const WINNING_SCORE = 5;

function prompt(print = ' ') {
  return console.log('=> ', print);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
  return array;
}

function initializeDeck() {
  const deck = [];
  const suits = ['Heart', 'Diamond', 'Club', 'Spade'];
  const cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

  for (let suit in suits) {
    for (let card in cards) {
      let currentSuit = suits[suit];
      let currentCard = cards[card];
      deck.push(`${currentCard} of ${currentSuit}`);
    }
  }

  return deck;
}

const displayWelcomeTo21 = function() {
  console.clear();
  console.log();
  console.log("               ___ Welcome To Twenty One ___");
  console.log();
};

function dealingCards(deck, reciver) {
  let [firistCard, secondCard] = shuffle(deck);
  reciver = [firistCard, secondCard];
  return reciver;
}

function validatingStayOrHit() {
  prompt(
    "Type 'h' if you want to hit or 's' if you you wish to stay."
  );

  let input = readline.question().toLowerCase();
  while (!['h', 's'].includes(input)) {
    prompt("Please type the correct word.");
    input = readline.question().toLowerCase();
  }

  return input;
}

function sumOfCards(currentPlayer) {
  let suits = ['J', 'Q', 'K'];
  let totalCardValue = 0;

  currentPlayer.forEach(card => {
    if (suits.includes(card[0])) card = 10;
    if (card[0] === 'A') {
      if (totalCardValue > DEALER_WINNING_GOAL) {
        card = 1;
      } else if (totalCardValue < DEALER_WINNING_GOAL) {
        card = 11;
      }
    }
    card = parseInt(card, 10);
    totalCardValue += card;

  });

  return totalCardValue;
}

function hitCard(deck, currentPlayer) {
  currentPlayer.push(shuffle(deck)[0]);
  return currentPlayer;
}

function joinWithAnd(cards, joinWith = ' and ') {
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

function displayGivenCards(player, dealer, value) {
  let hasHidenCard = hideDealerCard(dealer);
  prompt(`You have: ${joinWithAnd(player)} with a value of ${value}`);
  prompt(`Dealer has: ${joinWithAnd(hasHidenCard)}`);
  console.log();
}

function playerTurn(deck, player, playerValue) {
  while (true) {
    let input = validatingStayOrHit();
    if (input === 's') console.log("                    You choose to stay!");

    if (input === 'h') {
      console.log("                      You choose to Hit!");
      player = hitCard(deck, player);
      playerValue = sumOfCards(player);
      prompt(`Your current Cards are: ${joinWithAnd(player)}`);
      prompt(`Your current value is ${playerValue}.`);
    }

    if (input === 's' || playerValue >= PLAYER_WINNING_GOAL) break;
  }

  return playerValue;
}

function dealerTurn(deck, dealer, dealerValue) {
  prompt(`Dealer's current cards are: ${joinWithAnd(dealer)}`);
  prompt(`dealer's current value is: ${dealerValue}`);

  while (true) {
    if (dealerValue < DEALER_WINNING_GOAL) {
      console.log("                       Dealer Hits!");
      dealer = hitCard(deck, dealer);
      let updatedDealerValue = sumOfCards(dealer);
      dealerValue = updatedDealerValue;
      prompt(`Now Dealer's cards becomes: ${joinWithAnd(dealer)}`);
      prompt(`Dealer current card value is: ${dealerValue}`);
    }

    if (dealerValue >= DEALER_WINNING_GOAL) {
      console.log("                    Dealer choose to stay!");
      break;
    }

    if (isBusted(dealerValue)) break;
  }

  return dealerValue;
}

function isBusted(currentValue) {
  return currentValue > 21;
}

function hideDealerCard(dealer) {
  let coveredCard = [...dealer];
  coveredCard[1] = 'Unknown Card';
  return coveredCard;
}

function isGameOne() {
  prompt('Play again? (yes or no)');
  let response = readline.prompt().toLocaleLowerCase();
  let choices = ['y', 'n', 'yes', 'no'];

  while (!choices.includes(response)) {
    prompt("Please type the valid choice");
    response = readline.prompt().toLocaleLowerCase();
  }
  return response[0] === 'y';
}

function isWinner(playerValue, dealerValue) {
  if (isBusted(playerValue)) return "Dealer Wins! You are BUSTED!";
  if (isBusted(dealerValue)) return "  You Win! Dealer BUSTED!   ";

  if ((playerValue === PLAYER_WINNING_GOAL) || (playerValue > dealerValue)) {
    return "You are a Winner!";
  } else if (
    (dealerValue === DEALER_WINNING_GOAL) || (dealerValue > playerValue)
  ) {
    return "Dealer is a Winner!";
  } else {
    return "The Game is a Tie!";
  }
}

function isGrandWinner() {
  if (gameScore.dealer === WINNING_SCORE) {
    console.log("                   You are a GRAND WINNER!");
    console.log("                  <<<<<<<<<<<<<>>>>>>>>>>>>>>");
    gameScore.dealer = 0;
    gameScore.player = 0;
  } else if (gameScore.player === WINNING_SCORE) {
    console.log("                   You are a GRAND WINNER!");
    console.log("                  <<<<<<<<<<<<<>>>>>>>>>>>>>>");
    gameScore.dealer = 0;
    gameScore.player = 0;
  }
}

function displayFinalResults(player, playerValue, dealer, dealerValue) {
  prompt(`You have: ${joinWithAnd(player)} with ${playerValue} value`);
  prompt(`Dealer has: ${joinWithAnd(dealer)} with ${dealerValue} value`);

  let finalResult = isWinner(playerValue, dealerValue);
  if (finalResult[0] === 'D') gameScore.dealer += 1;
  if (finalResult[0] === 'Y') gameScore.player += 1;

  console.log();
  prompt(`Dealer score ${gameScore.dealer} times.`);
  prompt(`You score ${gameScore.player} times.`);
  console.log();
  if ((
    gameScore.dealer === WINNING_SCORE) || (gameScore.player === WINNING_SCORE
  )) {
    isGrandWinner();
  } else {
    console.log(`                   ${finalResult}`);
    console.log("             ***************************************");
  }
}

do {
  displayWelcomeTo21();

  let DEALER = [];
  let PLAYER = [];
  let deck = initializeDeck();

  PLAYER = dealingCards(deck, PLAYER);
  DEALER = dealingCards(deck, DEALER);

  let playerValue = sumOfCards(PLAYER);
  let dealerValue = sumOfCards(DEALER);

  displayGivenCards(PLAYER, DEALER, playerValue);

  console.log("                   .... Your turn ....");
  playerValue = playerTurn(deck, PLAYER, playerValue);

  if (playerValue < PLAYER_WINNING_GOAL) {
    console.log("                   .... Dealer turn ....");
    dealerValue = dealerTurn(deck, DEALER, dealerValue);
  }
  displayFinalResults(PLAYER, playerValue, DEALER, dealerValue);
} while (isGameOne());


