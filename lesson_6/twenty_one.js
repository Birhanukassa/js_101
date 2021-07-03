const readline = require("readline-sync");
const PLAYER_WINNING_GOAL = 21;
const DEALER_WINNING_GOAL = 17;
let gameScore = { player: 0, dealer: 0 };
const WINNING_SCORE = 5;

const prompt = print  => console.log("🢥 ", print);

const goodByeMessage = () => prompt("Thank you for visiting. Goodbye. 🙌");

function initializeDeck() {
  let deck = [];
  const SUITS = ['♥', '♦', '♣', '♠'];
  const CARDS = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  const HAS_TEN_POINTS = ['Jack', 'Queen', 'King'];

  for (let suit = 0; suit < SUITS.length; suit++) {
    for (let card = 0; card < CARDS.length; card++) {
      let currentCard = CARDS[card];
      let currentSuit = SUITS[suit];
      let point = card % 10;
      if (HAS_TEN_POINTS.includes(currentCard)) {
        point = 10;
      } else {
        point++;
      }
      deck.push({ suits: currentSuit, value: currentCard, points: point });
    }
  }

  return deck;
}

function isBusted(currentPayerValue) {
  return currentPayerValue > PLAYER_WINNING_GOAL;
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
  let [newCard] = shuffle([...deck]);
  currentPlayer.push(newCard);
  return currentPlayer;
}

function hideDealerCard(dealer) {
  let coveredCard = [...dealer];
  coveredCard[1] = 'Unknown Card';
  return coveredCard;
}

function displayGivenCards(player, dealer, value) {
  console.log("");
  player = objectToString(player);
  dealer = hideDealerCard(objectToString(dealer));

  prompt(`You have:          ${joinAnd(player)} total of ${value} points`);
  prompt(`Dealer has:        ${joinAnd(dealer)}`);
  console.log("");
}

function dealingCards(deck) {
  let [firstCard, secondCard] = shuffle(deck);
  return [firstCard, secondCard];
}

function hitOrStayValidator() {
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
      return `${copyOfCards.join(',  ')}${joinWith + isLastCard}`;
  }
}

function playerTurn(deck, player, playerValue) {
  while (true) {
    let input = hitOrStayValidator();
    if (input === 'h') {
      prompt("                   You choose to Hit!");
      console.log("");
      player = hitCard(deck, player);
      playerValue = sumOfCards(player);
      prompt(`Your current Cards are:   ${joinAnd(objectToString(player))}.`);
      prompt(`Your current points are:   ${playerValue} points.`);
    }

    if (input === 's' || playerValue >= PLAYER_WINNING_GOAL) {
      if (input === 's') prompt("                   You choose to stay!");
      console.log("");
      break;
    }
  }

  return playerValue;
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
  resetScores();
}

function displayFinalResults(player, playerValue, dealer, dealerValue) {
  prompt(`You have:          ${joinAnd(objectToString(player))} total of ${playerValue} points`);
  prompt(`Dealer has:        ${joinAnd(objectToString(dealer))} total of ${dealerValue} points`);

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

const instructions = () => console.log(` 
    To play the game, you will be given two cards. 
    The goal of the game is to get as close to 21 points possible without going over.
    If you hit 21 points, you win! If you or Dealer go over 21 points, it's a loss.
    If the Dealer gets to 17 points, the Dealer wins. 
    If you get to precisely the same points, it's a tie.

    Good luck! 🎉
              
              `);

const displayWelcomeTo21 = () => {
  console.clear();
  console.log(`                  ___ Welcome To Twenty One ___ 
                  =============================
 
                   ☝  Rules of the Game Play!   
                  -----------------------------              
  `);
};

function isGameOne() {
  console.log("               To start a new game, press 'y' or 'n'");
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

function resetScores() {
  gameScore = { player: 0, dealer: 0 };
}

function dealerTurn(deck, dealer, dealerValue) {
  while (dealerValue <= DEALER_WINNING_GOAL) {
    prompt("                   Dealer Hits!");
    console.log("");
    dealerValue  = sumOfCards(hitCard(deck, dealer));

    prompt(`Now Dealer's cards becomes:   ${joinAnd(objectToString(dealer))}`);
    prompt(`Dealer current becomes:   ${dealerValue} points.`);

    if (dealerValue >= DEALER_WINNING_GOAL) {
      console.log("");
      prompt("                   Dealer choose to stay!");
      console.log("");
      break;
    }

  }

  return dealerValue;
}

do {
  displayWelcomeTo21();
  instructions();
  if (!isGameOne()) break;
  let dealer = [];
  let player = [];
  let deck = initializeDeck();
  prompt("                   Let's start the Game!");
  player = dealingCards(deck, player);
  dealer = dealingCards(deck, dealer);

  let playerValue = sumOfCards(player);
  let dealerValue = sumOfCards(dealer);

  displayGivenCards(player, dealer, playerValue);

  console.log("                 .... Your turn ....");
  playerValue = playerTurn(deck, player, playerValue);

  if (playerValue < PLAYER_WINNING_GOAL) {
    console.log("                 .... Dealer turn ....");
    dealerValue = dealerTurn(deck, dealer, dealerValue);
  }

  displayFinalResults(player, playerValue, dealer, dealerValue);
} while (isGameOne());


