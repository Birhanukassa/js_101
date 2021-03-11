/* Odd Lists

// Write a function that returns an Array that contains 
every other element of an Array that is passed in as an 
argument. The values in the returned list should be those 
values that are in the 1st, 3rd, 5th, and so on elements of
the argument Array.*/

function oddities(array) {
    let newElement = [];
    for(let i = 0; i < array.length; i += 2 ) {
      newElement.push(array[i]);
    }  
    return newElement;
}

// function oddities(array) {
//     let oddElements = [];
//     for (let idx = 0; idx < array.length; idx += 2) {
//       oddElements.push(array[idx]);
//     }
//     return oddElements;
// }
// let oddities = function ([].filter(index => index + 2);

// let array = [1, 2, 3];
// array.forEach(function(num) {
//   console.log(num); // on first iteration  => 1
//                     // on second iteration => 2
//                     // on third iteration  => 3
// });

// Examples:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []








