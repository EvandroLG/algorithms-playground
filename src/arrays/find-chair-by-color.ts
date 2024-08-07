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

import { deepStrictEqual } from 'assert';

type Chair = { id: number; color: string };

function findChairByColor(items: Chair[], color: string) {
  return items.find((item) => item.color === color);
}

deepStrictEqual(
  findChairByColor(
    [
      { id: 1, color: 'red' },
      { id: 2, color: 'blue' },
      { id: 3, color: 'green' },
      { id: 4, color: 'blue' },
    ],
    'blue'
  ),
  { id: 2, color: 'blue' }
);

deepStrictEqual(
  findChairByColor(
    [
      { id: 1, color: 'red' },
      { id: 2, color: 'blue' },
      { id: 3, color: 'green' },
      { id: 4, color: 'blue' },
    ],
    'gray'
  ),
  undefined
);
