function getName(prompt) {
    let readlineSync = require('readline-sync');
    let name = readlineSync.question(prompt);
    return name;
  }

let firstNum = getName('Enter the first number:\n ');
let secondNum = getName('Enter the second number:\n ');

console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`)
console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`)
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)
console.log(`${firstNum} / ${secondNum} = ${Math.floor(firstNum / secondNum)}`)
console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`)
console.log(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`)
 
