"use strict";
/*
  Reduce

  Given an integer array nums, a reducer function fn, and an initial value init,
  return the final result obtained by executing the fn function on each element of the array,
  sequentially, passing in the return value from the calculation on the preceding element.

  Example:
  Input: [1,2,3,4], (acc, curr) => acc + curr, 0
  Output: 10
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function reduce(arr, fn, initial) {
    var acc = initial;
    for (var i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}
(0, assert_1.strictEqual)(reduce([1, 2, 3, 4], function (acc, curr) { return acc + curr; }, 0), 10);
