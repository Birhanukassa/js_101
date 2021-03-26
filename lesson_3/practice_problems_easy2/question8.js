/*
// Question 8

// How would you check whether the objects assigned
// to variables numbers and table below are arrays?
*/

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false


console.log(Array.isArray(numbers));
console.log(Array.isArray(table));