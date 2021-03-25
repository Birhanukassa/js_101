/*
Question 3
Alan wrote the following function, which was intended to return all
of the factors of number:
*/
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
  // answer
  // while (divisor > 0) {
  //   if (number % divisor === 0) {
  //     factors.push(number / divisor);
  //   }
  //   divisor -= 1;
  // }
}

/*
Alyssa noticed that this code would fail when the input is 0 or a
negative number, and asked Alan to change the loop. How can he make
this work without using a do/while loop? Note that we're not looking
to find the factors for 0 or negative numbers, but we want to handle
it gracefully instead of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?
*/


console.log(factors(0));
console.log(factors(1));
console.log(factors(2));
console.log(factors(97));
console.log(factors(196));
