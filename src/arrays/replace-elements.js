/*
  Replace Elements

  Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
  After doing so, return the array.

  Example:
  Input: [17,18,5,4,6,1]
  Output: [18,6,6,6,1,-1]
*/

function replaceElements(arr) {
  const output = [];
  let greatestItem = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    const item = arr[i];

    if (greatestItem === null) {
      output.push(-1);
    } else {
      output.push(greatestItem);
    }

    greatestItem = Math.max(greatestItem, item);
  }

  return output.reverse();
}

const assert = require('assert');
assert.deepEqual(replaceElements([17, 18, 5, 4, 6, 1]), [18, 6, 6, 6, 1, -1]);
