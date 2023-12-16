/*
  Remove Duplicates

  Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
  Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
  Return k after placing the final result in the first k slots of nums.
  Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

  Example:
  Input: [1,1,1,2,2,3]
  Output: 5
*/

function removeDuplicates(arr) {
  if (arr.length <= 2) {
    return arr.length;
  }

  for (let i = 0; i < arr.length - 2; i++) {
    let p1 = i;
    let p2 = i + 1;
    let p3 = i + 2;

    while (arr[p1] === arr[p2] && arr[p2] === arr[p3]) {
      arr.splice(p3, 1);
    }
  }

  return arr.length;
}

const assert = require('assert');
assert.equal(removeDuplicates([1, 1, 1, 2, 2, 3]), 5);
