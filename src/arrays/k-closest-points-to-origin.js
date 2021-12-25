/*
  K Closest Points To Origin

  Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
  The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
  You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

  Example:
  Input: [[1,3],[-2,2]], 1
  Output: [[-2,2]]
*/

function kClosestPointsToOrigin(points, k) {
  const sorted = points
    .slice()
    .sort((a, b) => squaredDistance(a) - squaredDistance(b));

  return sorted.slice(0, k);
}

function squaredDistance([x, y]) {
  return Math.pow(x, 2) + Math.pow(y, 2);
}

const assert = require('assert');
assert.deepEqual(
  kClosestPointsToOrigin(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  ),
  [[-2, 2]]
);
