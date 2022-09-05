/*
  Valid Word Square

  Given an array of strings words, return true if it forms a valid word square.
  A sequence of strings forms a valid word square if the kth row and column read the same string, where 0 <= k < max(numRows, numColumns).

  Example:
  Input: ["abcd","bnrt","crmy","dtye"]
  Output: true
*/

function validWordSquare(words) {
  let p2 = 0;

  for (const word of words) {
    const chars = [];
    let p1 = 0;

    while (p1 < words.length) {
      chars.push(words[p1][p2]);
      p1++;
    }

    p2++;

    if (chars.join('') !== word) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(validWordSquare(['abcd', 'bnrt', 'crmy', 'dtye']));
