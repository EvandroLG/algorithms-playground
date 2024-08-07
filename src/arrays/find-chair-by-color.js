"use strict";
/*
  Find Chair By Color

  You are given an array of objects, where each object represents a chair with properties such as id and color.
  Your task is to implement a function that searches for a chair in the array based on a specific color.

  Example:
  Input: [
    { id: 1, color: "red" },
    { id: 2, color: "blue" },
    { id: 3, color: "green" },
    { id: 4, color: "blue" }
  ], "blue"
  Output: { id: 2, color: "blue" }
*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function findChairByColor(items, color) {
    return items.find(function (item) { return item.color === color; });
}
(0, assert_1.deepStrictEqual)(findChairByColor([
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
    { id: 4, color: 'blue' },
], 'blue'), { id: 2, color: 'blue' });
(0, assert_1.deepStrictEqual)(findChairByColor([
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
    { id: 4, color: 'blue' },
], 'gray'), undefined);
