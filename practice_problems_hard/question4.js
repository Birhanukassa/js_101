/*
Question 4

Ben was tasked to write a simple JavaScript function to determine
whether an input string is an IP address using 4 dot-separated numbers,
e.g., 10.4.5.11. He is not familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber.
It determines whether a string is a numeric string between 0 and 255
as required for IP numbers and asked Ben to use it. Here's the code
that Ben wrote:
*/
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

/* Alyssa reviewed Ben's code and said, "It's a good start,
but you missed a few things. You're not returning a false condition,
and you're not handling the case when the input string has more or less
than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should
be invalid."
Help Ben fix his code.
Solution 4
There are several ways to fix this code. We'll look at one possible
solution to both parts of the problem.

To determine whether there are precisely 4 dot-separated "words"
in the string, you can check the value of dotSeparatedWords.length
after splitting the string.

Copy Code
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}
Great! The code now handles inputs that don't contain 4 dot-separated
words, but the other error remains: it doesn't return false when
encountering an invalid component such as 257 or abc. Ben used a
break statement to break out of the while loop, but that causes
control to fall through to the return true statement. You can fix this
by using return false instead of break.

Copy Code
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
*/

console.debug(isDotSeparatedIpAddress('1.1.1'));
console.debug(isDotSeparatedIpAddress('1.2.3.4.5'));
console.debug(isDotSeparatedIpAddress('-11.1.0.0'));
console.debug(isDotSeparatedIpAddress('10.4.5.11'));  // true

