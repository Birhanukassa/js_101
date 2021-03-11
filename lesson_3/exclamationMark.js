/**
Question 2
How can you determine whether a given string ends
with an exclamation mark (!)?

*/

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false


function lastChar(param) {
  return param.slice(-1) === '!';
}

// str1.endsWith("!"); // true
// str2.endsWith("!"); // false

console.log(lastChar(str1)); // true
console.log(lastChar(str2)); // false


