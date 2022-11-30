/*
  Create Target Array

  Given two arrays of integers nums and index. Your task is to create target array under the following rules:
  - Initially target array is empty.
  - From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
  - Repeat the previous step until there are no elements to read in nums and index.
  Return the target array.
  It is guaranteed that the insertion operations will be valid.

  Example:
  Input: [0,1,2,3,4], [0,1,2,2,1]
  Output: [0,4,1,3,2]
*/

function createTargetArray(nums, index) {
  const output = [];

  while (nums.length) {
    const item = nums.shift();
    const idx = index.shift();

    if (output[idx] === undefined) {
      output[idx] = item;
    } else {
      updateArray(output, idx, item);
    }
  }

  return output;
}

function updateArray(arr, idx, item) {
  let tmp = arr[idx];
  arr[idx] = item;
  let currentIdx = idx + 1;

  while (arr[currentIdx] !== undefined) {
    let currentItem = arr[currentIdx];
    arr[currentIdx] = tmp;
    tmp = currentItem;
    currentIdx++;
  }

  arr[currentIdx] = tmp;
}

const assert = require('assert');
assert.deepEqual(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]), [
  0,
  4,
  1,
  3,
  2,
]);
