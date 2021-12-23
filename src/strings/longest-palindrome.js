/*
  Longest Palindrome

  Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
  Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

  Example:
  Input: 'abccccdd'
  Output: 7
*/

function longestPalindrome(s) {
  const counter = s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});

  let output = 0;
  const letters = Object.keys(counter);

  for (const letter of letters) {
    if (counter[letter] === 1) {
      continue;
    }

    if (isEven(counter[letter])) {
      output += counter[letter];
    } else {
      output += counter[letter] - 1;
    }
  }

  if (s.length - output > 0) {
    return output + 1;
  }

  return output;
}

function isEven(n) {
  return n % 2 === 0;
}

const assert = require('assert');
assert.equal(longestPalindrome('abccccdd'), 7);
