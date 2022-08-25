/*
  Number Of Matches

  You are given an integer n, the number of teams in a tournament that has strange rules:
  - If the current number of teams is even, each team gets paired with another team.
  A total of n / 2 matches are played, and n / 2 teams advance to the next round.
  - If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired.
  A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
  Return the number of matches played in the tournament until a winner is decided.

  Example:
  Input: 7
  Output: 6
*/

function numberOfMatches(n) {
  if (n <= 1) {
    return 0;
  }

  if (isEven(n)) {
    return n / 2 + numberOfMatches(n / 2);
  }

  return (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1);
}

function isEven(n) {
  return n % 2 === 0;
}

const assert = require('assert');
assert.equal(numberOfMatches(7), 6);
