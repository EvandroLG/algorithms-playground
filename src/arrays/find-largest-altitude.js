/*
  Find Largest Altitude

  There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
  You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

  Example:
  Input: [-5,1,5,0,-7]
  Output: 1
*/

function findLargestAltitude(gain) {
  const altitudes = buildAltitudes(gain);
  return Math.max(...altitudes);
}

function buildAltitudes(gain) {
  const arr = [0];

  for (let i = 0; i < gain.length; i++) {
    const result = arr[i] + gain[i];
    arr.push(result);
  }

  return arr;
}

const assert = require('assert');
assert.equal(findLargestAltitude([-5, 1, 5, 0, -7]), 1);
