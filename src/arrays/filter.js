"use strict";
/*
  Filter

  Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

  Example:
  Input: [0,10,20,30], (n) => return n > 10
  Output: [20, 30]
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function filter(arr, fn) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (fn(item)) {
            output.push(item);
        }
    }
    return output;
}
(0, assert_1.deepStrictEqual)(filter([0, 10, 20, 30], function (item) { return item > 10; }), [20, 30]);
