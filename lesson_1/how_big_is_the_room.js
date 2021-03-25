let rlSync = require('readline-sync');
let lengthInMeter = rlSync.question("Enter the length of the room in meters: ");
let widthInMeter = rlSync.question("Enter the width of the room in meters: ");

let areaSqMeter = lengthInMeter * widthInMeter;
let areaSqFeet = areaSqMeter * 10.7639;

console.log(`The area of the room is ${areaSqMeter.toFixed(2)} square meters (${areaSqFeet.toFixed(2)} square feet).`)
