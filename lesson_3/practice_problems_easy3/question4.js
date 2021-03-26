// Question 4

// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

//Try to answer without running the code.

// The output will be: [ { first: 42 }, { second: "value2" }, 3, 4, 5 ]