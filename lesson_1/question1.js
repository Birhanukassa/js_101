
// Welcome Stranger

let employer_name = ["John", "Q", "Doe"];
let job_types = { title: "Master", occupation: "Plumber" }

function greetings(array, object) {
  arrayToString = String(array).replace(/,/g, " ");
  return `Hello, ${arrayToString}! Nice to have a ${object.title} ${object.occupation} around.` 
}

console.log(greetings(employer_name,job_types));
//Hello, John Q Doe! Nice to have a Master Plumber around.
