/*
  Maximum Number Of String Pairs

  You are given a 0-indexed array words consisting of distinct strings.
  The string words[i] can be paired with the string words[j] if:
  - The string words[i] is equal to the reversed string of words[j].
  - 0 <= i < j < words.length.
  Return the maximum number of pairs that can be formed from the array words.
  Note that each string can belong in at most one pair.

  Example:
  Input: ["cd","ac","dc","ca","zz"]
  Output: 2
*/

function maximumNumberOfStringPairs(words) {
  let result = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPair(words[i], words[j])) {
        result++;
      }
    }
  }

  return result;
}

function isPair(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  let p1 = 0;
  let p2 = a.length - 1;

  while (p2 >= 0) {
    if (a[p1] !== b[p2]) {
      return false;
    }

    p2--;
    p1++;
  }

  return true;
}

const assert = require('assert');
assert.equal(maximumNumberOfStringPairs(['cd', 'ac', 'dc', 'ca', 'zz']), 2);
