
// const xor = function (param1, param2) {
//     if(param1 )
//     return param1 || param2;
// }
//const xor = (param1, param2) => param2 || param1;

const xor = (param1, param2) => !! param1 || param2;       





console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
