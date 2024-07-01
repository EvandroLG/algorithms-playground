/*
  Boats To Save People

  You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit.
  Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
  Return the minimum number of boats to carry every given person.

  Example:
  Input: [3,2,2,1], limit = 3
  Output: 3
*/

function boatsToSavePeople(people, limit) {
  people.sort((a, b) => a - b);
  let totalBoats = 0;
  let p1 = 0;
  let p2 = people.length - 1;

  while (p1 <= p2) {
    const weight = people[p1] + people[p2];

    if (weight <= limit) {
      p1++;
      p2--;
    } else {
      p2--;
    }

    totalBoats++;
  }

  return totalBoats;
}

const assert = require('assert');
assert.strictEqual(boatsToSavePeople([3, 2, 2, 1], 3), 3);
