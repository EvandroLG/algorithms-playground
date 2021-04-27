/*
  Find Substring

  Return the index of the first occurence of a substring in a given string, or -1 if substring is not part of the main string.
  For the purpose of this problem, we will return `0` when substring is an empty string. It is consistent to C's `strstr` and Java's `indexOf`.

  Example 1:
  Input: string = 'hello', substring = 'll'
  Output: 2

  Example 2:
  Input: string = 'aaaaa', substring = 'bba'
  Output: -1

  Example 3:
  Input: string = '', substring = ''
  Output: 0
*/

function findSubstring(str, sub) {
  if (sub === '') {
    return 0;
  }

  if (str.length < sub.length) {
    return -1;
  }

  let p1 = 0;
  let p2 = 0;

  while (p1 < str.length) {
    if (str[p1] === sub[p2]) {
      if (p2 === sub.length - 1) {
        return Math.abs(p1 - (sub.length - 1));
      }

      p1++;
      p2++;
    } else {
      p1++;
      p2 = 0;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(findSubstring('hello', 'll'), 2);
