/*
  Reduce

  Given an integer array nums, a reducer function fn, and an initial value init,
  return the final result obtained by executing the fn function on each element of the array,
  sequentially, passing in the return value from the calculation on the preceding element.

  Example:
  Input: [1,2,3,4], (acc, curr) => acc + curr, 0
  Output: 10
*/

import { strictEqual } from 'assert';

type Fn<T, V> = (acc: V, curr: T) => V;

function reduce<T, V>(arr: T[], fn: Fn<T, V>, initial: V): V {
  let acc = initial;

  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }

  return acc;
}

strictEqual(
  reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0),
  10
);
