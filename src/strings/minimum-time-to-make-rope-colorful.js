/*
  Minimum Time To Make Rope Colorful

  Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.
  Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help.
  Bob can remove some balloons from the rope to make it colorful.
  ou are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

  Example:
  Input: "abaac", [1,2,3,4,5]
  Output: 3
*/

function minimumTimeToMakeRopeColorful(colors, neededTime) {
  let p1 = 0;
  let p2 = 1;
  let output = 0;

  while (p2 < colors.length) {
    if (colors[p1] !== colors[p2]) {
      p1 = p2;
    } else {
      const minimum = Math.min(neededTime[p1], neededTime[p2]);
      output += minimum;

      if (neededTime[p1] < neededTime[p2]) {
        p1 = p2;
      }
    }

    p2++;
  }

  return output;
}

const assert = require('assert');
assert.equal(minimumTimeToMakeRopeColorful('abaac', [1, 2, 3, 4, 5]), 3);
