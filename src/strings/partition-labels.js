/*
  Partition Labels

  You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
  Return a list of integers representing the size of these parts.

  Example:
  Input: 'ababcbacadefegdehijhklij'
  Output: [9, 7, 8]
*/

function partitionLabels(str) {
  const output = [];

  for (let i = 0; i < str.length; i++) {
    let lastIdx = str.lastIndexOf(str[i]);
    let j = i;

    while (j < lastIdx) {
      lastIdx = Math.max(lastIdx, str.lastIndexOf(str[j]));
      j++;
    }

    output.push(lastIdx - i + 1);
    i = lastIdx;
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(partitionLabels('ababcbacadefegdehijhklij'), [9, 7, 8]);
