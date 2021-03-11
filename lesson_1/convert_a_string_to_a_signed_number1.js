
// Launch logo dark background
// MENU
// Courses
// Forum (10+)
// Events (4)
// Sharing (2)
// Videos (1)
// Resources
// Exercises
// Pages
// Back
// Our Pedagogy
// Mastery-based Learning
// Results & Outcomes
// For Employers
// Is This For Me
// Common Questions
// The Student Experience
// Love
// Core Curriculum
// Capstone
// Chat Room
// My Account
// My Assessments
// Sign Out

// JS101 - Small ProblemsEasy 2Convert a String to a Signed Number!
// Convert a String to a Signed Number!
// In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

// Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If no sign is given, you should return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

// Examples

// Copy Code
// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true
// Show Solution & Discussion
//  Watch  Mark this exercise as complete  Go to the next exercise
// Add your unique solution below
// We want to invite you to contribute your unique solution or analysis. The goal here is to showcase the variety of ways in which this exercise can be solved, and the various tradeoffs one has to consider when working to a solution. Please do not submit redundant solutions, or solutions you haven't tested, or solutions that contain errors. It's not mandatory that you submit a solution. If you do, make sure it's a somewhat good solution that may be useful to others who are learning.

// Use the form below to add your solution or analysis for this exercise. You can include a link to a gist or pastebin, or write your entire solution right here. Make sure to use proper formatting so your code shows up correctly and preview your code first. You may include some commentary about your code and the tradeoffs you took, or some analysis about this exercise and its solutions. Make sure your solution fulfills all of the provided examples, if any, and doesn't contain any obvious errors.

// Don't use the form below to ask questions or make suggestions about the exercise. If you have a question, ask in our Community Forums. If you found an error or have a suggestion, use the Feedback form on the right side of this page.

// Add your solution or analysis
// Notify me of future submissions
// Formatting Help
// Preview 
// Show user submitted solutions

 function stringToSignedInteger(string) {
    if(string[0] === '+') {
         return string.slice(1) * 1;
    } else {
        return string * 1;
    }       
}      


// Solution
// Copy Code
function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}
/* Discussion
// In this solution, we opt to reuse the stringToInteger() function
 from the previous exercise. Why waste effort reinventing the wheel? 
 (Oh, wait. That's exactly what we're doing, isn't it?)

 This solution is reasonably straightforward: it simply looks at the first 
character of string. If the character is a -, the negative of the number represented 
by the rest of the string is returned. If it is not a -, it returns the value of the 
rest of the string as a number, skipping over a leading + if present.

// To obtain the remainder of the string after a leading + or - we call 
String.prototype.slice() on our string. That will extract all the characters 
starting at index (first argument to this method), up to but not including the 
ending index (second argument to this method).*/
 
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true