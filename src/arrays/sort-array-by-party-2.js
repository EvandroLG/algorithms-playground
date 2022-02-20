/*
  Sort Array By Party 2

  Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
  Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
  Return any answer array that satisfies this condition.

  Example:
  Input: [4,2,5,7]
  Output: [2,7,4,5]
*/

function sortArrayByParty2(arr) {
  const size = arr.length;
  const odd = arr.filter(isOdd);
  const even = arr.filter(isEven);
  const output = [];

  for (let i = 0; i < size; i++) {
    if (isOdd(i)) {
      output.push(odd.pop());
    } else {
      output.push(even.pop());
    }
  }

  return output;
}

function isEven(item) {
  return item % 2 === 0;
}

function isOdd(item) {
  return !isEven(item);
}

const assert = require('assert');
assert.deepEqual(sortArrayByParty2([4, 2, 5, 7]), [2, 7, 4, 5]);
