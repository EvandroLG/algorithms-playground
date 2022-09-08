/*
  Square Is White

  You are given coordinates, a string that represents the coordinates of a square of the chessboard.
  Return true if the square is white, and false if the square is black.
  The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

  Example:
  Input: h3
  Output: true
*/

function squareIsWhite(coordinates) {
  const x = coordinates[0].charCodeAt(0) - 96;
  const y = +coordinates[1];

  if ((x + y) % 2 === 0) {
    return false;
  }

  return true;
}

const assert = require('assert');
assert.ok(squareIsWhite('h3'));
