/*
  Unique Triplets

  Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

  Example:
  Input: [-3, 0, 1, 2, -1, 1, -2]
  Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
*/

function uniqueTriplets(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const output = [];

  for (let i = 0; i < sorted.length; i++) {
    let target = -sorted[i];

    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }

    updatePair(sorted, output, target, i + 1);
  }

  return output;
}

function updatePair(arr, output, target, p1) {
  let p2 = arr.length - 1;

  while (p1 < p2) {
    const sum = arr[p1] + arr[p2];

    if (sum === target) {
      output.push([-target, arr[p1], arr[p2]]);
      p1++;
      p2--;
    } else if (sum < target) {
      p1++;
    } else {
      p2--;
    }
  }
}

const assert = require('assert');
assert.deepEqual(uniqueTriplets([-3, 0, 1, 2, -1, 1, -2]), [
  [-3, 1, 2],
  [-2, 0, 2],
  [-2, 1, 1],
  [-1, 0, 1],
]);
