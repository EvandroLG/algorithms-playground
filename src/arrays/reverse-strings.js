/*
  Reverse String

  Write a function that reverses a string. The input string is given as an array of characters s.
  You must do this by modifying the input array in-place with O(1) extra memory.

  Example:
  Input: ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]
*/

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function reverseString(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    swap(arr, p1, p2);
    p1++;
    p2--;
  }

  return arr;
}

const assert = require('assert');
assert.deepEqual(reverseString(['h', 'e', 'l', 'l', 'o']), [
  'o',
  'l',
  'l',
  'e',
  'h',
]);
