/*
  Max Number Of Apples

  You have some apples and a basket that can carry up to 5000 units of weight.
  Given an integer array weight where weight[i] is the weight of the ith apple, return the maximum number of apples you can put in the basket.

  Example:
  Input: [900,950,800,1000,700,800]
  Output: 5
*/

const MAX = 5000;

function maxNumberOfApples(weight) {
  const sorted = weight.slice().sort((a, b) => a - b);
  let sum = 0;
  let counter = 0;

  for (const apple of sorted) {
    if (sum + apple > MAX) {
      break;
    }

    sum += apple;
    counter++;
  }

  return counter;
}

const assert = require('assert');
assert.equal(maxNumberOfApples([900, 950, 800, 1000, 700, 800]), 5);
