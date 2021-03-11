/**
 * Create an array from the keys of the object obj below, 
 * with all of the keys converted to uppercase. Your implementation 
 * must not mutate obj.
 */
// let obj = {
//  b: 2,
//  a: 1,
//  c: 3,
// };

// //code here
// let keys = Object.keys(obj);

// let arr = [];

// keys.forEach(iterator => {
//   arr.push(iterator.toUpperCase());
// })

// console.log(obj, keys, arr);

// //the alternative answer
// let objKeys = Object.keys(obj);
// let upperKeys = objKeys.map((key) => key.toUpperCase());
// console.log(upperKeys); // => [ 'B', 'A', 'C' ]
// console.log(obj); // => { b: 2, a: 1, c: 3 }
// //
// upperKeys = [];
// let objKeys = Object.keys(obj);
// objKeys.forEach(function(key) {
//   upperKeys.push(key.toUpperCase());
// });
// console.log(upperKeys); // => [ 'B', 'A', 'C' ]

//Create a new object named myObj that uses myProtoObj as its prototype.
// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = {};
// myObj = Object.create(myProtoObj);

// console.log(myObj);
// console.log(myObj.bar);

// myObj.qux = 3;

// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });
// //
// console.log();
// //
// for (let key in myObj) {
//   console.log(key);
// }
// //
// for (let key in myObj) {
//   if (myObj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
/**
Create a function that creates and returns a copy of an object. 
The function should take two arguments: the object to copy and 
an array of the keys that you want to copy. Do not mutate the 
original object.
The function should let you omit the array of keys argument when 
calling the function. If you do omit the argument, the function 
should copy all of the existing keys from the object.
 */
// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// function copyObj(sourceObject, keys) {
//   let destinationObject = {};

//   if (keys) {
//     keys.forEach(function(key) {
//       destinationObject[key] = sourceObject[key];
//     });

//     return destinationObject;
//   } else {
//     return Object.assign(destinationObject, sourceObject);
//   }
// }
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

console.log(obj);
console.log();
obj['bar'][3]['xyz'] = 606;
console.log(obj);