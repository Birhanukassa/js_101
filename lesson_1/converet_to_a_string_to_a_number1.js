/*Launch logo dark background

/ *Mastery-based Learning

JS101 - Small ProblemsEasy 2Convert a String to a Number!
Convert a String to a Number!
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Examples

Copy Code
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
Hide Solution & Discussion
Solution
Copy Code
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}
Discussion
As usual, this isn't the shortest or even the easiest solution to this problem, but it's straightforward. The big takeaway from this solution is our use of the DIGITS object to convert string digits to their numeric values. This technique of using objects to perform conversions is a common idiom that you can use in a wide variety of situations, often resulting in code that is easier to read, understand, and maintain.

Keep in mind that the keys of an object are always strings. Thus, on line 3, the 0 to the left of the colon (:) is a string even thought it doesn't look like a string. The 0 to the right is a number. That's a convenient relationship in this problem since we'll use digits stored as strings to look up the corresponding numeric values.

The actual computation of the numeric value of string is mechanical. We take each digit and add it to 10 times the previous value, which yields the desired result in almost no time. For example, if we have 4, 3, and 1, we compute the result as:

Copy Code
10 * 0 + 4 -> 4
10 * 4 + 3 -> 43
10 * 43 + 1 -> 431
Further Exploration
Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.

Example:

Copy Code
hexadecimalToInteger('4D9f') === 19871;
 Unwatch  Mark this exercise as complete  Go to the next exercise
Add your unique solution below
We want to invite you to contribute your unique solution or analysis. The goal here is to showcase the variety of ways in which this exercise can be solved, and the various tradeoffs one has to consider when working to a solution. Please do not submit redundant solutions, or solutions you haven't tested, or solutions that contain errors. It's not mandatory that you submit a solution. If you do, make sure it's a somewhat good solution that may be useful to others who are learning.

Use the form below to add your solution or analysis for this exercise. You can include a link to a gist or pastebin, or write your entire solution right here. Make sure to use proper formatting so your code shows up correctly and preview your code first. You may include some commentary about your code and the tradeoffs you took, or some analysis about this exercise and its solutions. Make sure your solution fulfills all of the provided examples, if any, and doesn't contain any obvious errors.

Don't use the form below to ask questions or make suggestions about the exercise. If you have a question, ask in our Community Forums. If you found an error or have a suggestion, use the Feedback form on the right side of this page.

Add your solution or analysis
Formatting Help
Preview 
Hide user submitted solutions
42723208?s=40
Birhanu Kassa
3 days ago
Copy Code
const stringToNum = str => str - 0;
0 Likes Edit Comment
28762429?s=40
Eddie Romelus
28 days ago
Copy Code
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function stringToInteger(string) {
  return string
    .split('')
    .reverse()
    .reduce((sum, char, idx) => {
      return sum + (DIGITS[char] * (10 ** idx))
    }, 0)
}
 Comment
71779483?s=40
Wes Anderson
about a month ago
Copy Code
/*
My Solution using only primitive data types.
That's just code for: I did not think about using the dictionary-like object
*/

function hexadecimalToInteger(stringParam) {
    let accumulator = 0;
    let place = 1;
    for (let i = stringParam['length'] - 1; i > -1; i -= 1) {
      if (stringParam[i] === '0') {
        let toBeAdded = 0 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i] === '1') {
        let toBeAdded = 1 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i] === '2') {
        let toBeAdded = 2 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i] === '3') {
        let toBeAdded = 3 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i] === '4') {
        let toBeAdded = 4 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i] === '5') {
        let toBeAdded = 5 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i] === '6') {
        let toBeAdded = 6 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i] === '7') {
        let toBeAdded = 7 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i] === '8') {
        let toBeAdded = 8 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i] === '9') {
        let toBeAdded = 9 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i].toUpperCase() === 'A') {
        let toBeAdded = 10 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i].toUpperCase() === 'B') {
        let toBeAdded = 11 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i].toUpperCase() === 'C') {
        let toBeAdded = 12 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i].toUpperCase() === 'D') {
        let toBeAdded = 13 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i].toUpperCase() === 'E') {
        let toBeAdded = 14 * place;
        accumulator += toBeAdded;
      } else if (stringParam[i].toUpperCase() === 'F') {
        let toBeAdded = 15 * place;
        accumulator += toBeAdded;
      }
      place *= 16;
    }
    return accumulator;
  }
  
  /* Comment
  22282057?s=40
  Coen van Steijn
  about a month ago
  Copy Code
  function stringToInteger(digitString) {
    const NUMBERS = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10
    }
  
    // I apply reverse() so that I can use the characters' indeces in the for loop
    digitString = digitString.split('').reverse();
    let result = 0;
  
    for (let idx = 0; idx < digitString.length; idx += 1) {
      result += NUMBERS[digitString[idx]] * (10 ** idx);
    }
  
    return result;
  }
  Further exploration:
  
  Copy Code
  function hexadecimalToInteger(hexString) {
    const HEX_NUMBERS = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    }
  
    let result = 0;
  
    hexString = hexString.toLowerCase();
    let arrayOfDigits = hexString.split('').map(char => HEX_NUMBERS[char]);
    arrayOfDigits.forEach(num => result = (result * 16) + num);
  
    return result;
  }
   Comment
  55663639?s=40
  Boris
  2 months ago
  Copy Code
  function stringToInteger(string) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let strChars = string.split('');
    let strLength = string.length;
    return strChars.reduce((acc, val, index) => {
      numbers.forEach((number) => {
        if (val == number) {
          let power = strLength - index - 1;
          acc += number * 10 ** power;
        }
      });
      return acc;
    }, 0);
  }
   Comment
  51244170?s=40
  Sam
  2 months ago
  Copy Code
  function stringToInteger(numStr) {
    let power = numStr.length - 1;
    return numStr.split('').reduce((acc, digit, idx) => {
      return acc + ((digit.charCodeAt(0) - 48) * 10**(power - idx));
    }, 0);
  }
   Comment
  35983578?s=40
  Michael Chapman
  2 months ago
  Copy Code
  Further Exploration:
  
  function hexadecimalToInteger(str) {
    const digits = {
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15
    };
    let power = 0;
    let arr = [];
    for (let index = str.length - 1; index >= 0; index--) {
      let hex = str[index];
      if (hex === hex.toLowerCase()) hex = hex.toUpperCase();
      arr.push((digits[hex] || hex) * ((16 ** power)));
      power += 1;
    }
    return arr.reduce((total, current) => total + current, 0);
  }
  
  console.log(hexadecimalToInteger('4D9f'));
   Comment
  38516489?s=40
  Nick Reisenauer
  2 months ago
  Copy Code
  const stringToInteger = (str) => {
    const reference = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
    };
    let result = 0;
    str
      .split("")
      .map((val) => reference[val])
      .forEach((el) => (result = 10 * result + el));
    return result;
  };
   Comment
  57697517?s=40
  Justin Halford
  4 months ago
  Copy Code
  function stringToInteger(str) {
    const DIGITS = {
      0 : 0,
      1 : 1,
      2 : 2,
      3 : 3,
      4 : 4,
      5 : 5,
      6 : 6,
      7 : 7,
      8 : 8, 
      9 : 9,
    }
  
    let result = 0;
    let digitVal = 0;
    let stringArr = str.split("").forEach((el) => {
      digitVal = DIGITS[el];
      result = (result * 10) + digitVal;
    });
    return result;
  }
   Comment
  50222149?s=40
  Kathy Fregoso
  4 months ago
  Further Exploration Solution:
  
  Copy Code
  
  function hexadecimalToInteger(string) {
    let newStr = string.toUpperCase();
    let hexDigits = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
    };
    let result = 0;
    let digitVal = 0;
    let stringArr = newStr.split("").forEach((el) => {
      digitVal = hexDigits[el];
      result = result * 16 + digitVal;
    });
    return result;
  }
   Comment 
  See more solutions 
 */                      "4321"
function stringToInteger(string){
  let obj = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9};
  let strToArr = string.split('').map(element => obj[element]);
  strToArr.forEach( digit => ())
}






let str = "4321"


console.log(stringToInteger("4321"));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true