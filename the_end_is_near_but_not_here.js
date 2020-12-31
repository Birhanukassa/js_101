
function penultimate(str) {
  let splitstr = str.split(' ');
  return splitstr[splitstr.length - 2];
};


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true