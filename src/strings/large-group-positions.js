/*
  Large Group Positions

  In a string s of lowercase letters, these letters form consecutive groups of the same character.
  For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
  A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
  A group is considered large if it has 3 or more characters.
  Return the intervals of every large group sorted in increasing order by start index.

  Example:
  Input: "abcdddeeeeaabbbcd"
  Output: [[3,5],[6,9],[12,14]]
*/

function largeGroupPositions(s) {
  const output = [];

  for (let i = 0; i < s.length - 1; i++) {
    let j = i + 1;

    while (j < s.length && s[i] === s[j]) {
      j++;
    }

    const diff = j - i - 1;

    if (diff >= 2) {
      output.push([i, j - 1]);
    }

    i = j - 1;
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(largeGroupPositions('abcdddeeeeaabbbcd'), [
  [3, 5],
  [6, 9],
  [12, 14],
]);
