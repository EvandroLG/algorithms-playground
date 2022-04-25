/*
  Guess Number

  We are playing the Guess Game. The game is as follows:
  I pick a number from 1 to n. You have to guess which number I picked.
  Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
  You call a pre-defined API int guess(int num), which returns three possible results:
  -1: Your guess is higher than the number I picked (i.e. num > pick).
  1: Your guess is lower than the number I picked (i.e. num < pick).
  0: your guess is equal to the number I picked (i.e. num == pick).

  Example:
  Input: 10
  Output: 6
*/

function guessNumber(n, guess) {
  return search(0, n, n, guess);
}

function search(start, end, target, guess) {
  const middle = Math.round((start + end) / 2);
  const result = guess(middle);

  if (result === 0) {
    return middle;
  }

  if (result === -1) {
    return search(start, middle - 1, target, guess);
  }

  return search(middle + 1, end, target, guess);
}

const assert = require('assert');
assert.equal(
  guessNumber(10, (n) => {
    if (n === 6) {
      return 0;
    }

    if (n > 6) {
      return -1;
    }

    return 1;
  }),
  6
);
