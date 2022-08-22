/*
  Remove Duplicates V2

  Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

  Example:
  Input: "deeedbbcccbdaa", 3
  Output: "aa"
*/

function removeDuplicates(s, k) {
  const indices = findDuplication(s, k);

  if (!indices.length) {
    return s;
  }

  const output = [];
  const [initialIdx, lastIdx] = indices;

  for (let i = 0; i < s.length; i++) {
    if (i < initialIdx || i > lastIdx) {
      output.push(s[i]);
    }
  }

  return removeDuplicates(output.join(''), k);
}

function findDuplication(s, k) {
  let p1 = 0;
  let p2 = 1;

  while (p2 < s.length) {
    if (s[p1] === s[p2]) {
      if (p2 - p1 + 1 === k) {
        return [p1, p2];
      }

      p2++;
    } else {
      p1 = p2;
      p2 = p1 + 1;
    }
  }

  return [];
}

const assert = require('assert');
assert.equal(removeDuplicates('deeedbbcccbdaa', 3), 'aa');
