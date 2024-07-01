/*
  Gas Station

  There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
  You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
  Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

  Example:
  Input: [1,2,3,4,5], [3,4,5,1,2]
  Output: 3
*/

function gasStation(gas, cost) {
  const totalGas = sum(gas);
  const totalCost = sum(cost);

  if (totalGas < totalCost) {
    return -1;
  }

  let initial = 0;
  let prev = 0;

  for (let i = 0; i < gas.length; i++) {
    const result = prev + (gas[i] - cost[i]);

    if (result < 0) {
      prev = 0;
      initial = i + 1;
    }
  }

  return initial;
}

function sum(arr) {
  return arr.reduce((acc, value) => acc + value, 0);
}

const assert = require('assert');
assert.strictEqual(gasStation([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]), 3);
