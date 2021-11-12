/*
  Reverse Words V2

  Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

  Example:
  Input: "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoc"
*/

function reverse(word) {
  return word.split('').reverse().join('');
}

function reverseWordsV2(str) {
  const words = str.split(' ');
  const output = [];

  for (const word of words) {
    output.push(reverse(word));
  }

  return output.join(' ');
}

const assert = require('assert');
assert.equal(
  reverseWordsV2("Let's take LeetCode contest"),
  "s'teL ekat edoCteeL tsetnoc"
);
