/*
  Union By

  Implement a function unionBy(array) that creates an array of unique values, in order, from all given arrays and accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed.

  Example:
  Input: (value: any) => value, [2], [1, 2]
  Output: [2, 1]
*/

function unionBy(iteratee, arrays) {
  const memo = new Set();
  const output = [];

  for (const arr of arrays) {
    for (const item of arr) {
      const result = iteratee(item);

      if (memo.has(result)) {
        continue;
      }

      output.push(item);
      memo.add(result);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(
  unionBy((value) => value, [[2], [1, 2]]),
  [2, 1]
);
