
function penultimate(str) {
  let splitStr = str.split(' ');
  return splitStr[splitStr.length - 2];
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true