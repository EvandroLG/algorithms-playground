/*
  Robot Return To Origin

  There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
  You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).
  Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

  Example:
  Input: "UD"
  Output: true
*/

function robotReturnToOrigin(moves) {
  let top = 0;
  let left = 0;

  for (const move of moves) {
    if (move === 'U') {
      top++;
    }

    if (move === 'D') {
      top--;
    }

    if (move === 'L') {
      left--;
    }

    if (move === 'R') {
      left++;
    }
  }

  return !top && !left;
}

const assert = require('assert');
assert.ok(robotReturnToOrigin('UD'));
