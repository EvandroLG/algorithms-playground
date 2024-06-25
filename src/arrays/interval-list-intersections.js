/*
  Interval List Intersections

  For two arrays of closed intervals given as input, intervalListA and intervalListB, where each interval has its own start and end time, write a function that returns the intersection of the two interval arrays.

  Example:
  Input: [[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]
  Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
*/

function intervalListIntersections(firstList, secondList) {
  const output = [];

  for (let i = 0; i < firstList.length; i++) {
    for (let j = 0; j < secondList.length; j++) {
      const hasIntersection =
        firstList[i][1] >= secondList[j][0] &&
        secondList[j][1] >= firstList[i][0];

      if (!hasIntersection) {
        continue;
      }

      const start = Math.max(firstList[i][0], secondList[j][0]);
      const end = Math.min(firstList[i][1], secondList[j][1]);
      output.push([start, end]);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepStrictEqual(
  intervalListIntersections(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  ),
  [
    [1, 2],
    [5, 5],
    [8, 10],
    [15, 23],
    [24, 24],
    [25, 25],
  ]
);
