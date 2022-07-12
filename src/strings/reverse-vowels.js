/*
  Reverse Vowels

  Given a string s, reverse only all the vowels in the string and return it.
  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

  Example:
  Input: "leetcode"
  Output: "leotcede"
*/

function reverseVowels(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const output = s.split('');

  while (p1 < p2) {
    const s1 = s[p1].toLowerCase();
    const s2 = s[p2].toLowerCase();

    if (vowels.has(s1) && vowels.has(s2)) {
      swap(output, p1, p2);
      p1++;
      p2--;
    } else {
      if (!vowels.has(s1)) {
        p1++;
      }

      if (!vowels.has(s2)) {
        p2--;
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

const assert = require('assert');
assert.equal(reverseVowels('leetcode'), 'leotcede');
