/*
  Merge Similar Items

  You are given two 2D integer arrays, items1 and items2, representing two sets of items.
  Each array items has the following properties:
  - items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
  - The value of each item in items is unique.
  Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.
  Note: ret should be returned in ascending order by value.

  Example:
  Input: [[1,1],[4,5],[3,8]], [[3,1],[1,5]]
  Output: [[1,6],[3,9],[4,5]]
*/

function mergeSimilarItems(items1, items2) {
  const concat = items1.concat(items2);
  const map = concat.reduce((acc, [value, weight]) => {
    if (!acc.hasOwnProperty(value)) {
      acc[value] = 0;
    }

    acc[value] += weight;

    return acc;
  }, {});

  return Object.entries(map);
}

const assert = require('assert');
assert.deepEqual(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  ),
  [
    [1, 6],
    [3, 9],
    [4, 5],
  ]
);
