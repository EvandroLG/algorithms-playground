/*
  Sort Colors

  Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
  We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
  You must solve this problem without using the library's sort function.

  Example:
  Input: [2,0,2,1,1,0]
  Output: [0,0,1,1,2,2]
*/

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function sortColors(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  let idx = 0;

  while (idx <= p2) {
    if (arr[idx] === 0) {
      swap(arr, idx, p1);
      p1++;
      idx++;
    } else if (arr[idx] === 2) {
      swap(arr, idx, p2);
      p2--;
    } else {
      idx++;
    }
  }
}

const assert = require('assert');

const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);

assert.deepEqual(arr, [0, 0, 1, 1, 2, 2]);
