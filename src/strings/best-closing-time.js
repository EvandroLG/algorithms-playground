/*
  Best Closing Time

  You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters 'N' and 'Y':
  - if the ith character is 'Y', it means that customers come at the ith hour
  - whereas 'N' indicates that no customers come at the ith hour.
  If the shop closes at the jth hour (0 <= j <= n), the penalty is calculated as follows:
  - For every hour when the shop is open and no customers come, the penalty increases by 1.
  - For every hour when the shop is closed and customers come, the penalty increases by 1.
  Return the earliest hour at which the shop must be closed to incur a minimum penalty.

  Example:
  Input: "YYNY"
  Output: 2
*/

function bestClosingTime(customers) {
  let currentPenalty = 0;

  for (const c of customers) {
    if (c === 'Y') {
      currentPenalty++;
    }
  }

  let min = currentPenalty;
  let earliest = 0;

  for (let i = 0; i < customers.length; i++) {
    const c = customers[i];

    if (c === 'Y') {
      currentPenalty--;
    } else {
      currentPenalty++;
    }

    if (currentPenalty < min) {
      min = currentPenalty;
      earliest = i + 1;
    }
  }

  return earliest;
}

const assert = require('assert');
assert.equal(bestClosingTime('YYNY'), 2);
