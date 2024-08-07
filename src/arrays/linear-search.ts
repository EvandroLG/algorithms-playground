/*
 * Linear search
 *
 * Given an array of any type, returns the index of the first occurrence of the element in the array.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5], 3
 * Output: 2
 */

import { strictEqual } from 'assert';

function linearSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

strictEqual(linearSearch([1, 2, 3, 4, 5], 3), 2);
