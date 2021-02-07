/*
  Insertion Sort
*/

function swap(i, j, arr) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(j - 1, j, arr);
      j = j - 1;
    }
  }

  return arr;
}

const assert = require('assert');
assert.deepEqual(insertionSort([8, 5, 2, 9, 5, 6, 3]), [2, 3, 5, 5, 6, 8, 9]);
