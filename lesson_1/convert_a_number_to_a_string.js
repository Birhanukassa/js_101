
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(number) {
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }
function integerToString(number) {
    const result = [];

    do {
      result.push(number % 10);
      number = Math.floor(number / 10);
    } while (number > 0);

    return result.reverse().join('');
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

/**
 * // PEDAC (Advanced)
// Intros
  // Where are you now?
  // Experience with PEDAC so far?
// PEDAC steps brief overview
// Questions?
// Practice?

/*
//////  
  
// PEDAC (Advanced)
// Intros
  // Where are you now?
  // Experience with PEDAC so far?
// PEDAC steps brief overview
// Questions?
// Practice?


//////  
  
Given an array of strings, return a boolean indicating whether
at least three of the elements in the array have digits whose sum is
divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

For example:
In the array ['35', '01110', '126', '57', '13'], 
the sum of the digits of each element will be: [8, 3, 9, 12, 4]
from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
so our function would return true.  See the below test cases for more examples.  
  
* PROBLEM
input- array of strings
return- boolean

convert the array elements at some point
array argument containing ONLY strings with digits 0-9
empty input or invalid chars?

* TEST CASES
return false if less than 3 elements in arg array
str element may contain only one str digit

* DATA STRUCTURES
our input is an array
intermediary data - new array of the sum of each element's digits
  - maybe we can use built-in array methods??
return boolean
*/
/**
 * /*
Given a string of one or more words, return an array that contains
the number of vowels in each word of the argument string.

The returned array should have the same number of
elements as words in the argument string.

Vowels are aeiou.

* PROBLEM *
input: str (one or more words, may have space chars separating words)
return: array of numbers
  // array should have the same number of elements as words in input str
  
// case-insensitivity?
// should treat it case-insensitive??

* TEST CASES *
// empty str -> return an empty array
// treat input str case-insensitively
// words are identified as space-separated, but they might not have letters
// we should return a value for each 'word' even if its zero

* DATA STRUCTURE *
input is a str, output is an array

potential intermediary array of each individual word
*/


console.log(vowelCount('WhaTs yOur enneagram?'));
// [1, 2, 4]
console.log(vowelCount('Colonel Sanders feeds me well !!'));
// [3, 2, 2, 1, 1, 0]
console.log(vowelCount(''));
// []
console.log(vowelCount('ZoInkies!! There are monsters in here.'));
// [4, 2, 2, 2, 1, 2]
console.log(vowelCount('grrr!'));
// [0]
