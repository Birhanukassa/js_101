const stringToInteger = str => str - 0;
//
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



console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
