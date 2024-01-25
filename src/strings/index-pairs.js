/*
  Index Pairs

  Given a string text and an array of strings words, return an array of all index pairs [i, j] so that the substring text[i...j] is in words.
  Return the pairs [i, j] in sorted order (i.e., sort them by their first coordinate, and in case of ties sort them by their second coordinate).

  Example:
  Input: "ababa", ["aba","ab"]
  Output: [[0,1],[0,2],[2,3],[2,4]]
*/

function indexPairs(text, words) {
  const output = [];

  for (let i = 0; i < text.length; i++) {
    for (const word of words) {
      if (text.startsWith(word, i)) {
        const lastIndex = i + word.length - 1;
        const pairs = [i, lastIndex];
        output.push(pairs);
      }
    }
  }

  return sort(output);
}

function sort(arr) {
  return arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });
}

const assert = require('assert');
assert.deepEqual(indexPairs('ababa', ['aba', 'ab']), [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
]);
