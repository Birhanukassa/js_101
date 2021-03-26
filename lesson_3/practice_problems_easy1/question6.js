// We have most of the Munster family in our ages object:
// Add entries for Marilyn and Spot to the object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

console.log(Object.assign(ages, additionalAges));

/*
* Question 6
Suppose we build an array like this:
*
*/
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);