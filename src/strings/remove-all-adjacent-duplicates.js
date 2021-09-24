/*
  Remove All Adjacent Duplicates

  You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
  We repeatedly make duplicate removals on s until we no longer can.
  Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

  Example 1:
  Input: s = "abbaca"
  Output: "ca"
*/

function removeAllAdjacentDuplicates(str) {
  const output = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (str[i] === output[output.length - 1]) {
        output.pop();
      } else {
        output.push(str[i]);
      }
    } else {
      i++;
    }
  }

  return output.join('');
}

const assert = require('assert');
assert.equal(removeAllAdjacentDuplicates('abbaca'), 'ca');
