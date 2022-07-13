/*
  Reverse Only Letters

  Given a string s, reverse the string according to the following rules:
  - All the characters that are not English letters remain in the same position.
  - All the English letters (lowercase or uppercase) should be reversed.

  Example:
  Input: "ab-cd"
  Output: "dc-ba"
*/

function reverseOnlyLetters(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  const output = s.split('');

  while (p1 < p2) {
    const s1 = s[p1];
    const s2 = s[p2];

    if (isLetter(s1) && isLetter(s2)) {
      swap(output, p1, p2);

      p1++;
      p2--;
    } else {
      if (isLetter(s1)) {
        p2--;
      } else {
        p1++;
      }
    }
  }

  return output.join('');
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function isLetter(s) {
  return /[a-z]/i.test(s);
}

const assert = require('assert');
assert.equal(reverseOnlyLetters('ab-cd'), 'dc-ba');
