// Question 6

// Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// This code will create a nested array that looks like this:

flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values,
// but in an un-nested format:

//flat()
/*
 // 1)
 console.log(nestedArray.flat());
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
 */

// concat()
/*
// 2)
let concat = [].concat.apply([], nestedArray);
 console.debug(concat);
 */

// spread
/*
// 3)
flintstones = [].concat(...flintstones);
console.log(flintstones);
*/

// reduce ES5
let reduce = flintstones.reduce(function(acc, curV) {
  return acc.concat(curV);
}, []);

console.log(reduce);

// reduce ES6
console.log(flintstones.reduce((acc, curV) => acc.concat(curV), []));

/*
 flintstones = [].concat(...flintstones);

 flintstones = flintstones.reduce((accum, element) => {
 return accum.concat(element);
}, []);

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

*/
