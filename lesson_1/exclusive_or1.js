// JS101 - Small ProblemsEasy 
// Exclusive Or
// The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

// Examples:

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

//Solution

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}
// Discussion
// This implementation is straight forward; it simply returns true if exactly one of the values is truthy; otherwise, it returns false.

// A shorter version of this function is:

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

// This is more idiomatic than the first solution, but it does take a little more effort to figure out what is going on. Note that this solution requires !! to force the return value to a boolean.

// Some of you may be tempted to use the ^ operator for this exercise. The ^ operator is a bit-wise operator for performing exclusive-or bit operations. In some cases, you can use ^ as an exclusive-or operator. However, it only works properly when both values are numeric or both are boolean -- anything else may lead to unexpected results. For instance, you might expect the following expression to return a truthy value:

// Copy Code
// 'a' ^ false
// It doesn't. Instead, it returns a falsy value (0).

// Further Exploration
// Can you think of a situation in which a boolean xor function would be useful? Suppose you were modeling a light at the top of a flight of stairs wired in such a way that the light can be turned on or off using either the switch at the bottom of the stairs or the switch at the top of the stairs. This is an xor configuration, and it can be modeled in JavaScript using the xor function. Think of some additional examples.

// || and && are so-called short circuit operators in that the second operand is not evaluated if its value is not needed. Does the xor function perform short-circuit evaluation of its operands? Why or why not? Does short-circuit evaluation in xor operations even make sense?

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
