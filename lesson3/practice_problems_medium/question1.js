
/*

// which century

Write a function that takes an integer year as input and returns the century.
The return value should be a string andends with st, nd, rd, or th as
appropriate for that number.New centuries begin in years that end with 01.
So,the years 1901-2000 comprise the 20th century.

Understanding the Problem:
- input:
  - integer umber
  - need to validate?
- output:
  - a string
  - begins with the centry number
  - ends with st, nd, rd, or thn umber rd , or th with st, nd,
- rules:
  - new centries begin in years that end with 01
  - centry string number into a string:
      - 1: st
      - 2: nd
      - 3: rd
      - 4-20: th
      - 21: st
      - 22: nd
      - 23: rd
      - 24-30: th
      ....
      - generalize:
        - centry_number % 10
        - 1, 2, 3: st, nd, rd
        - 0, 4-9: th
        - except for 11, 12 , 13: th

Examples / Test Cases:

century(1); => '1st'
century(100); => '1st'
century(101); => '2st'
century(133); => '2st'
century(245); => '3rd'
century(1052; =>  '11th'
century(1152); => '12th'
century(1252); => '13th'
century(2012); => '21st'
century(2112); => '22th'
century(22222) => '223th'
century(22512) => '226th'
*/

/*

// The odd word problem

Consider a character set consisting of letters, a space, and a point.
Words consist of one or more, but at most 20 letters.
An input text consists of one or more words separated from each other
by one or more spaces and terminated by 0 or more sp aces followed by a point.
Input should be read from, and including, the first letter of the first word,
up to and including the terminating point.
The output text is to be produced such that successive words are separated by
a single space with t he last word being terminated by a single point.
Odd words are copied in reverse order while even words are merely echoed.


For example, the input string

"whats the matter with kansas."

becomes

"whats eht matter htiw kansas."

Understanding the Problem:

- input:
   - 1 - many words
   - separated by: 1 - many spaces
   - terminated by:
     - 0 - many spaces
     - followe by a point
   - chars: letter, space, point, up to 20 letters
   - need to handle failure?

output:

   - words: have the odd words reversed
   - odd means odd number words, based on e index
   - separated by one space between words
   - terminated: 0 space, followed by a dot

Examples/ Test Cases:

reverse_odd_words("hello.")             => "hello."
reverse_odd_words("hello.")             => "hello."
reverse_odd_words("hello world.")       => "hello dlrow."
reverse_odd_words("hello world .")      => "hello di row."
reverse_odd_words("hello world.")       => "hello dlrow."
reverse_odd_words("heilo hello world.") => ""
reverse_odd_words("") => ""

*/

/*
For example:
Given n = 3

 *
***
 *

Given 1n = 5

  *
 ***
*****
 ***
  *

// Understanding the Problem

- input: number
  - what happens when the number is 0?
  - what happens when number is an even number?
- output:
Understanding the Problem
- input: number
   - what happens when the number is 0?
   - what happens when number is an even number?
- output:
   - returns a string with new line char "\n" delimeters
   - prints on the screen
- model the problem
   - given an odd number n, for example, 5
   - output n strings
      - 1, 3, 5, 3, 1
      - prepend number 1 of spaces: 2, 1, 0, 1, 2*
      - join together with in, or loop and print

 */

/*

// scrabble score

Write a program that, given a word, computes the scrabble score for that word.

Letter Values

Letter                                      Value

A, E, I, 0, U, L, N, R, S, T                  1
D, G                                          2
B, C, M, P                                    3
F, H, V, W, Y                                 4
K                                             5
J, X                                          8
Q, Z                                          10

Understanding the Problem

- Input: a striing
- lower case / upper cases?
Ouput: an integer (the scrabble score)
Rules:
   - the score is the sum of scores of each letter in the string
   - the letter value table is used to loop up letter scores

Examples: Test Cases

score('a');       =>  1
score('cabbage'); => 14
score('Cabbage'); => 14

 */


/*
Question 1

Let's do some "ASCII Art": a stone-age form of nerd artwork from back
in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones
Rock! 10 times, with each line indented 1 space to the right of the line
above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!

*/

let string = 'The Flintstones Rock!';

function askiiArt(string) {
  for (let stringCount = 0; stringCount <= 10; stringCount++) {
    console.log(" ".repeat(stringCount), string);
  }
}

//askiiArt(string);

console.log(askiiArt(string));

/*
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    The Flintstones Rock!
     The Flintstones Rock!
      The Flintstones Rock!
       The Flintstones Rock!
        The Flintstones Rock!
         The Flintstones Rock!
*/
