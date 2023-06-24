/*
  Find Delayed Arrival Time

  You are given a positive integer arrivalTime denoting the arrival time of a train in hours, and another positive integer delayedTime denoting the amount of delay in hours.
  Return the time when the train will arrive at the station.
  Note that the time in this problem is in 24-hours format.

  Example:
  Input: 13, 11
  Output: 0
*/

function findDelayedArrivalTime(arrivalTime, delayedTime) {
  const arrive = arrivalTime + delayedTime;
  return arrive >= 24 ? arrive - 24 : arrive;
}

const assert = require('assert');
assert.equal(findDelayedArrivalTime(13, 11), 0);
