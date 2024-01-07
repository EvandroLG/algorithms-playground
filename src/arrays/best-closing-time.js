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
  const [time] = bestClosingTimeHelper(customers, 0);
  return time;
}

function bestClosingTimeHelper(customers, closeTime) {
  const result1 = penalties(customers, closeTime);

  if (closeTime === customers.length) {
    return result1;
  }

  const result2 = bestClosingTimeHelper(customers, closeTime + 1);

  if (result1[1] === result2[1]) {
    if (result1[0] < result2[0]) {
      return result1;
    }

    return result2;
  }

  if (result1[1] < result2[1]) {
    return result1;
  }

  return result2;
}

function penalties(customers, closeTime) {
  let penalties = 0;
  const mapCloseTime = {
    Y: 1,
    N: 0,
  };

  const mapOpenTime = {
    Y: 0,
    N: 1,
  };

  for (let i = 0; i < customers.length; i++) {
    const c = customers[i];

    if (closeTime <= i) {
      penalties += mapCloseTime[c];
    } else {
      penalties += mapOpenTime[c];
    }
  }

  return [closeTime, penalties];
}

const assert = require('assert');
assert.equal(bestClosingTime('YYNY'), 2);
