/*
  Find Error Nums

  You have a set of integers s, which originally contains all the numbers from 1 to n.
  Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
  You are given an integer array nums representing the data status of this set after the error.
  Find the number that occurs twice and the number that is missing and return them in the form of an array.

  Example:
  Input: [1,2,2,4]
  Output: [2,3]
*/

function findErrorNums(arr) {
  const memo = new Set();
  let repeated = -1;

  for (const item of arr) {
    if (memo.has(item)) {
      repeated = item;
    }

    memo.add(item);
  }

  const missing = findMissing(memo);

  return [repeated, missing];
}

function findMissing(memo) {
  const arr = Array.from(memo);
  arr.sort((a, b) => a - b);
  let expected = 1;

  for (const item of arr) {
    if (expected !== item) {
      break;
    }

    expected++;
  }

  return expected;
}

const assert = require('assert');
assert.deepEqual(findErrorNums([1, 2, 2, 4]), [2, 3]);
