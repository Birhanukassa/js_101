/* Question 1
 Given a string, return a new string that replaces every occurrence
of the word "important" with "urgent":
Practice Problems: Easy 2 */ 

let advice = "important Few things in life are as important as house training your pet important dinosaur.";

console.log(advice.replace("important", "urgent"));
let replace = advice.replace(/important/g, 'ugrent');
console.log(replace);
