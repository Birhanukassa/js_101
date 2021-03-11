/* Question 4
Using the following string, create a new string that contains
all lowercase letters except for the first character, which should be
capitalized. (See the example output.)
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

console.log(munstersDescription.charAt(0).toUpperCase() +
munstersDescription.toLowerCase().slice(1));
// The munsters are creepy and spooky.
