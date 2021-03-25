

const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidator(number) {
  return number.trim() === '' || Number(number) <= 0 || Number.isNaN(Number(number));
}
prompt(MESSAGES.chooseYourLanguage);
let choosenLanguage = readline.question();

while (!['1', '2', '3'].includes(choosenLanguage)) {
  prompt('Must choose 1, 2, or 3');
  choosenLanguage = readline.question();
}

switch (choosenLanguage) {
  case '1':
    prompt(MESSAGES.language.en.welcome);
    break;
  case '2':
    prompt(MESSAGES.language.fr.welcome);
    break;
  case '3':
    prompt(MESSAGES.language.de.welcome);
    break;
}

const amount = function() {
  prompt("What is the loan amount?");
  let loanAmount = readline.question();
  while (invalidator(loanAmount)) {
    prompt("Please enter a valied amount");
    loanAmount = readline.question();
  }
  return Number(loanAmount);
};

const annualPecentageRate = function() {
  prompt("What is the Annual Percentage Rate in percent");
  let annualPRate = readline.question();
  while (invalidator(annualPRate)) {
    prompt("Please enter a valid Annual Percentage Rate");
    annualPRate = readline.question();
  }
  return Number(annualPRate);
};

const loanDurationInYears = function() {
  prompt("What is the loan duration in year/s?");
  let loanDInYears = readline.question();
  while (invalidator(loanDInYears)) {
    prompt("Please enter a valid duration in year/s");
    loanDInYears = readline.question();
  }
  return Number(loanDInYears);
};

console.log("<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

while (true) {
  let loanAmount = Number(amount());
  let APR = Number(annualPecentageRate()) / 100;
  let monthlyInterestRate = APR / 12;
  let loanDurationInMonths = Number(loanDurationInYears()) * 12;

  let monthlyPayment = (loanAmount) *
                (monthlyInterestRate /
                (1 - Math.pow((1 + monthlyInterestRate),
                  (-loanDurationInMonths))));

  let totalAmount = loanDurationInMonths * monthlyPayment;
  let totalInterest = totalAmount - loanAmount;

  prompt(`With $${loanAmount} loan, payment every month will be >> $${monthlyPayment.toFixed(2)}`);
  prompt(`Total payment of ${loanDurationInMonths} payments >> $${totalAmount.toFixed(2)}`);
  prompt(`Total interest >> $${totalInterest.toFixed(2)}`);
  console.log();
  prompt("Thank you for using the App! would you like to make another calculation? (y/n)");
  let recalculate = readline.question().toLocaleLowerCase();

  while (recalculate.charAt(0) !== 'y' && recalculate.charAt(0) !== 'n') {
    prompt("Please inter 'y' or 'n'");
    recalculate = readline.question().toLocaleLowerCase();
  }

  if (recalculate[0].toLowerCase() === 'n') break;
}


