
// Determine whether the following object of people and their age
// contains an entry for 'Spot':
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.hasOwnProperty('spot'));

// Question 3

// Given a number and an array, determine whether the number is included
// n the array.'

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];


let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));  // false
console.log(numbers.includes(number2));  // true