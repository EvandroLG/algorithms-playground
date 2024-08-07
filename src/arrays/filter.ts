/*
  Filter

  Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

  Example:
  Input: [0,10,20,30], (n) => return n > 10
  Output: [20, 30]
*/

import { deepStrictEqual } from 'assert';

type Fn<T> = (item: T) => boolean;

function filter<T>(arr: T[], fn: Fn<T>): T[] {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (fn(item)) {
      output.push(item);
    }
  }

  return output;
}

deepStrictEqual(
  filter([0, 10, 20, 30], (item) => item > 10),
  [20, 30]
);
