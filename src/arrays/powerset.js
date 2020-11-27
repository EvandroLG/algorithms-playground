/*
  Powerset

  Write a function that takes in an array of unique integers and returns its powerset.
  The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of [1,2] is [[], [1], [2], [1,2]].
  Note that the sets in the powerset do not need to be in any particular order.

  Sample Input
  array = [1, 2, 3]

  Sample Output
  [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
*/

function powerset(nums) {
  const output = [[]];

  for (const item of nums) {
    const size = output.length;

    for (let i = 0; i < size; i++) {
      const newItem = output[i].concat(item);
      output.push(newItem);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(
  powerset([1, 2, 3]).sort(),
  [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]].sort()
);
