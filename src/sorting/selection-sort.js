/*
  Selection Sort
*/

function swap(i, j, arr) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function selectionSort(arr) {
  let currentIdx = 0;
  const size = arr.length;

  while (currentIdx < size - 1) {
    let smallestIdx = currentIdx;

    for (let i = currentIdx + 1; i < size; i++) {
      if (arr[smallestIdx] > arr[i]) {
        smallestIdx = i;
      }
    }

    swap(currentIdx, smallestIdx, arr);
    currentIdx = currentIdx + 1;
  }

  return arr;
}

const assert = require('assert');
assert.deepEqual(selectionSort([8, 5, 2, 9, 5, 6, 3]), [2, 3, 5, 5, 6, 8, 9]);
