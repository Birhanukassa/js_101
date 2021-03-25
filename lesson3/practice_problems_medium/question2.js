/*
Question 2
Starting with the string:
*/

let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

// function replace (string) {
//   let stringUpperCase = string.toUpperCase();
//   let ist = stringUpperCase.replace('T', 't');
//   let ism = ist.replace('M', 'm');
//   console.log(ism);
//   // console.log(ism, a, b);
// }
//replace(munstersDescription);

// onsole.log(a);
let a = munstersDescription.split("").map(function(char) {
  // [
  //'T', 'h', 'e', ' ', 'M', 'u', 'n',
  //'s', 't', 'e', 'r', 's', ' ', 'a',
  //'r', 'e', ' ', 'c', 'r', 'e', 'e',
  //'p', 'y', ' ', 'a', 'n', 'd', ' ',
  //'s', 'p', 'o', 'o', 'k', 'y', '.'
  // ]

  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

console.log(a);
