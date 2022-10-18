/*
  Count Points

  There are n rings and each ring is either red, green, or blue.
  The rings are distributed across ten rods labeled from 0 to 9.
  You are given a string rings of length 2n that describes the n rings that are placed onto the rods.
  Every two characters in rings forms a color-position pair that is used to describe each ring where:
  - The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
  - The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
  For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.
  Return the number of rods that have all three colors of rings on them.

  Example:
  Input: 'B0B6G0R6R0R6G9'
  Output: 1
*/

function countPoints(rings) {
  const map = buildMap(rings);

  return Object.values(map).reduce((acc, items) => {
    if (items.size < 3) {
      return acc;
    }

    return acc + 1;
  }, 0);
}

function buildMap(rings) {
  const fragments = rings.split('');
  const map = {};

  for (let i = 0; i < fragments.length; i += 2) {
    const key = fragments[i + 1];
    const value = fragments[i];

    if (!map.hasOwnProperty(key)) {
      map[key] = new Set();
    }

    map[key].add(value);
  }

  return map;
}

const assert = require('assert');
assert.equal(countPoints('B0B6G0R6R0R6G9'), 1);
