"use strict";
/*
  Map

  Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
  The returned array should be created such that returnedArray[i] = fn(arr[i], i).

  Example:
  Input: [1,2,3], function plusone(n) { return n + 1; }
  Output: [2,3,4]
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function map(arr, fn) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        var result = fn(arr[i], i);
        output.push(result);
    }
    return output;
}
(0, assert_1.deepStrictEqual)(map([1, 2, 3], function (item) { return item + 1; }), [2, 3, 4]);
