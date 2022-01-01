/*
  Random Pick With Weight

  You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.
  You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it.

  Example:
  Input: [1, 3]
  Output: [1, 1, 1, 1, 0]
*/

function randomPickWithWeight(arr) {
  const prefixSums = [];
  let sum = 0;

  for (const weight of arr) {
    sum += weight;
    prefixSums.push(sum);
  }

  return () => {
    const randomIdx = Math.random() * sum;

    for (let i = 0; i < prefixSums.length; i++) {
      if (randomIdx < prefixSums[i]) {
        return i;
      }
    }
  };
}

const assert = require('assert');
const randomPick = randomPickWithWeight([1, 3]);

assert.equal(randomPick(), 1);
