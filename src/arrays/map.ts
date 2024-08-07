/*
  Map

  Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
  The returned array should be created such that returnedArray[i] = fn(arr[i], i).

  Example:
  Input: [1,2,3], function plusone(n) { return n + 1; }
  Output: [2,3,4]
*/

import { deepStrictEqual } from 'assert';

type Fn<T, M> = (item: T, i: number) => M;

function map<T, M>(arr: T[], fn: Fn<T, M>): M[] {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i], i);
    output.push(result);
  }

  return output;
}

deepStrictEqual(
  map([1, 2, 3], (item) => item + 1),
  [2, 3, 4]
);
