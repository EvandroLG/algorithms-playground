/*
  Ship Within Days

  A conveyor belt has packages that must be shipped from one port to another within days days.
  The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
  Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

  Example:
  Input: [1,2,3,4,5,6,7,8,9,10], 5
*/

function shipWithinDays(weights, days) {
  const total = weights.reduce((acc, weight) => acc + weight);
  const max = Math.max(...weights);

  let left = max;
  let right = total;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (isFeasible(weights, middle, days)) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

function isFeasible(weights, capacity, days) {
  let daysNeeded = 1;
  let currentLoad = 0;

  for (const weight of weights) {
    currentLoad += weight;

    if (currentLoad > capacity) {
      daysNeeded++;
      currentLoad = weight;
    }

    if (daysNeeded > days) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.equal(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 15);
