
// *Odd Lists

// let oddities = arr => {
//  let odd = [];
//   for (let i = 0; i < arr.length; i+= 2) {  
//     odd.push(arr[i]); 
//   } 
//   return odd;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []
//

/**
* Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character (for example, 
"b"). The first character has position 0, which causes the last one to be found 
at position string.length - 1. In other words, a two-character string has length 2, 
and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase “B” characters there are in the string.
Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to make use of 
this new function.

 */

// Your code here.
function countBs(string, char) {
  let arrSt = string.split('');
  let count = 0;
  for( let i = 0; i < arrSt.length; i++) {
    if (arrSt[i] == char) {
      count += 1;
    }    
  } 
  return count;
}


// → 2
//console.log(countChar("kakkerlak", "k"));
// → 4

// function countBs(string) {
//   let counted = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == 'B') {
//       counted += 1;
//     }
//   }
//   return counted;
// }

console.log(countBs("kakkerlak", "k"));
console.log(countBs("BBC", 'B'));