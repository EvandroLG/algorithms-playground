/*
  Minimum Time Visiting All Points

  On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi].
  Return the minimum time in seconds to visit all the points in the order given by points.
  You can move according to these rules:
  - In 1 second, you can either:
    - move vertically by one unit,
    - move horizontally by one unit, or
    - move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
  - You have to visit the points in the same order as they appear in the array.
  - You are allowed to pass through points that appear later in the order, but these do not count as visits.

  Example:
  Input: [[1,1],[3,4],[-1,0]]
  Output: 7
*/

function minimumTimeVisitingAllPoints(points) {
  let counter = 0;

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const nextPoint = points[i + 1];

    if (nextPoint) {
      const [x, y] = point;

      const diff = Math.max(
        Math.abs(x - nextPoint[0]),
        Math.abs(y - nextPoint[1])
      );

      counter += diff;
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(
  minimumTimeVisitingAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ]),
  7
);
