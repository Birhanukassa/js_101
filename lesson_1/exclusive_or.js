function xor(value1, value2) {
    if ((value1 && !value2) || (value2 && !value1)) {
      return true;
    }
    return false;
}

//

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

//My Solution 
const xor = (param1, param2) => !! (param1 || param2);       



console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
