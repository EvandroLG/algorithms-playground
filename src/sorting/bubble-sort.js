/*
  Bubble Sort
*/

function swap(i, j, arr) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function bubbleSort(arr) {
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (arr[i] > arr[j]) {
        swap(i, j, arr);
      }
    }
  }

  return arr;
}

const assert = require('assert');
assert.deepEqual(bubbleSort([8, 5, 2, 9, 5, 6, 3]), [2, 3, 5, 5, 6, 8, 9]);
