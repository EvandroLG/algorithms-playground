/*
  Reverse Words

  Write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order. For example, given the string "tim is great", your function should return "great is tim".
  For this problem, a word can contain special characters, punctuation, and numbers. The words in the string will be separated by one or more whitespaces, and the reversed string must contain the same whitespaces as the original string. For example, given the string "whitespaces 4" you would be expected to return "4 whitespaces".
  Note that you're not allowed to to use any built-in split or reverse methods/functions. However, you are allowed to use a built-in join method/function.
  Also note that the input string isn't guaranteed to always contain words.

  Sample Input
  string = "Evandro is the best!"

  Sample Output
  "best! the is Evandro"
*/

function reverseWords(str) {
  const words = [];
  const output = [];
  let tmp = [];

  for (const c of str) {
    if (c === ' ') {
      words.push(tmp.join(''));
      tmp = [];
    } else {
      tmp.push(c);
    }
  }

  words.push(tmp.join(''));

  for (let i = words.length - 1; i >= 0; i--) {
    const word = words[i];
    output.push(word);
  }

  return output.join(' ');
}

const assert = require('assert');
assert.equal(reverseWords('Evandro is the best!'), 'best! the is Evandro');
