/*
  Sort Array By Party

  Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
  Return any array that satisfies this condition.

  Example:
  Input: [3,1,2,4]
  Output: [2,4,3,1]
*/

function sortArrayByParty(arr) {
  const odd = [];
  const even = [];

  for (const item of arr) {
    if (isEven(item)) {
      even.push(item);
    } else {
      odd.push(item);
    }
  }

  return even.concat(odd);
}

function isEven(item) {
  return item % 2 === 0;
}

const assert = require('assert');
assert.deepEqual(sortArrayByParty([3, 1, 2, 4]), [2, 4, 3, 1]);
