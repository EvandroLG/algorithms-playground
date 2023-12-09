/*
  Largest Good Integer

  You are given a string num representing a large integer. An integer is good if it meets the following conditions:
  - It is a substring of num with length 3.
  - It consists of only one unique digit.
  Return the maximum good integer as a string or an empty string "" if no such integer exists.

  Exmaple:
  Input: "6777133339"
  Output: "777"
*/

function largestGoodInteger(s) {
  let result = '';

  for (let i = 0; i < s.length - 2; i++) {
    const areEqual = s[i] == s[i + 1] && s[i + 1] == s[i + 2];

    if (areEqual && (!result.length || result[0] < s[i])) {
      result = s[i] + s[i + 1] + s[i + 2];
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(largestGoodInteger('6777133339'), '777');
