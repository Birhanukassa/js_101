// function square(num) {
//     return num ** 2;
// }
// or
// let multiply = function (num) {
//     return num ** 2;
// }
// or 
// let multiply = (num) => {
//     return num ** 2;
// }
//or
const multiply = (num1, num2) => num1 * num2;
const square = function(num) {
    return multiply(num, num);
}

console.log(square(50)); // 2500
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
