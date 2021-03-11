/*
Launch logo dark background
MENU
Courses
Forum (10+)
Events (4)
Sharing (2)
Videos (1)
Resources
Exercises
Pages
Back
Our Pedagogy
Mastery-based Learning
Results & Outcomes
For Employers
Is This For Me
Common Questions
The Student Experience
Love
Core Curriculum
Capstone
Chat Room
My Account
My Assessments
Sign Out

JS101 - Small ProblemsEasy 2Convert a Number to a String!
Convert a Number to a String!
In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Examples:

Copy Code
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"
Hide Solution & Discussion
Solution
Copy Code
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}
Discussion
The solution is somewhat similar to the stringToInteger function from earlier.

Like in stringToInteger, this solution also uses a lookup table, but this time we use an array. In building the DIGITS lookup table, we just need to be mindful to align the string value to the array index position, so that when we do something like DIGITS[5], we get the string representation of the index/number 5.

The tricky part of the solution is the "math" for getting the numbers digit by digit. The solution gets the rightmost digit (a one's digit) by getting the remainder of dividing the number by 10. For instance, 4321 % 10 returns 1. The solution then chops off the rightmost digit to get the next number by reassigning number to the result of Math.floor(number / 10). Consequently, the result string is incrementally built by prepending the looked-up value, using the remainder as the index, to the previous value of result. This process repeats until the value of number becomes 0.

The Built-in Method
For this exercise, we looked at the Number.prototype.toString method. Compared to its counterpart approach of prepending an empty string ('') to a number, using toString is more explicit. It can also be called directly on any number.

Copy Code
(17).toString();        // "17"
(17).toString(2);       // "10001"
(17).toString(16);      // "11"
Notice when using the built-in method that parentheses enclose the number. This is necessary so that the JavaScript interpreter knows to use the number primitive as a Number object. As an object, it can access the built-in methods of Number.prototype. JavaScript's built-in method is also more powerful than the one the solution implemented. toString can take a radix value as an optional argument. Using the radix value, this method can convert any number to any base from base 2 up to base 36.

One final note: the Airbnb Style Guide calls for using the constructor Function String() in preference to toString(). The reason for this is twofold:

String() works with all types, including null and undefined, while toString() raises an exception in those cases.
String() is guaranteed to return a string. This is not the case with toString() — individual objects can override toString() and they don't have to return a string.
 Watch  Mark this exercise as complete  Go to the next exercise
Add your unique solution below
We want to invite you to contribute your unique solution or analysis. The goal here is to showcase the variety of ways in which this exercise can be solved, and the various tradeoffs one has to consider when working to a solution. Please do not submit redundant solutions, or solutions you haven't tested, or solutions that contain errors. It's not mandatory that you submit a solution. If you do, make sure it's a somewhat good solution that may be useful to others who are learning.

Use the form below to add your solution or analysis for this exercise. You can include a link to a gist or pastebin, or write your entire solution right here. Make sure to use proper formatting so your code shows up correctly and preview your code first. You may include some commentary about your code and the tradeoffs you took, or some analysis about this exercise and its solutions. Make sure your solution fulfills all of the provided examples, if any, and doesn't contain any obvious errors.

Don't use the form below to ask questions or make suggestions about the exercise. If you have a question, ask in our Community Forums. If you found an error or have a suggestion, use the Feedback form on the right side of this page.

Add your solution or analysis
Notify me of future submissions
Formatting Help
Preview 
Show user submitted solutions
 */