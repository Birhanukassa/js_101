/*Question 3

Given the following similar sets of code,
what will each code snippet print?

A)
                        2    3    1
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);
console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// one is: one
// two is: two
// three is: three
\\wsl\Ubuntu-18.04\etc\skel\.bashrc
*/

/*
// B)

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// one is: one
// two is: two
// three is: three
*/

/*
// C)
*/
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);     // ["two"]
console.log(`two is: ${two}`);     // ["three"]
console.log(`three is: ${three}`); // ["one"]


