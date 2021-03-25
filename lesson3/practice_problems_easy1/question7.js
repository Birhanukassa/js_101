// Determine whether the name Dino appears in the strings below --
// check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

/*
make a string to an array.
  - use array's include method to check
    if the target string is a part of array elemnt
      return true
    atherwise
      return false
*/

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

console.log(str1.match('Dino') !== null); // false
console.log(str2.match('Dino') !== null); // true

console.log(str1.indexOf('D)ino') > -1); // false
console.log(str2.indexOf('Dino') > -1); // true