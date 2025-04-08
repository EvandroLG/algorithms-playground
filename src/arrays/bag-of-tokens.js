/*
  Bag Of Tokens

  You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] denotes the value of tokeni.
  Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):
  - Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.
  - Face-down:  If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.
  Return the maximum possible score you can achieve after playing any number of tokens.

  Example:
  Input: [100, 200], 150
  Output: 1
*/

function bagOfTokens(tokens, power) {
  const sorted = tokens.slice().sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;
  let score = 0;
  let max = 0;

  while (left <= right) {
    if (power >= sorted[left]) {
      power -= sorted[left];
      score++;
      left++;
    } else {
      if (score >= 1) {
        score--;
        power += sorted[right];
      }

      right--;
    }

    max = Math.max(max, score);
  }

  return max;
}

const assert = require('assert');
assert.equal(bagOfTokens([100, 200], 150), 1);
