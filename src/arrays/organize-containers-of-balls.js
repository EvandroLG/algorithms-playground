/*
  Organize Containers Of Balls

  David has several containers, each with a number of balls in it.
  He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method.
  David wants to perform some number of swap operations such that:
  - Each container contains only balls of the same type.
  - No two balls of the same type are located in different containers.

  Example:
  Input: [[1, 4], [2, 3]]
  Output: false
*/

function organizeContainersOfBalls(arr) {
  const containers = buildContainers(arr);
  const types = buildTypes(arr);

  for (let i = 0; i < arr.length; i++) {
    if (containers[i] !== types[i]) {
      return false;
    }
  }

  return true;
}

function buildContainers(arr) {
  const output = [];

  for (let row = 0; row < arr.length; row++) {
    let sum = 0;

    for (let col = 0; col < arr.length; col++) {
      const value = arr[row][col];
      sum += value;
    }

    output.push(sum);
  }

  return output.sort((a, b) => a - b);
}

function buildTypes(arr) {
  const output = [];

  for (let col = 0; col < arr.length; col++) {
    let sum = 0;

    for (let row = 0; row < arr.length; row++) {
      const value = arr[row][col];
      sum += value;
    }

    output.push(sum);
  }

  return output.sort((a, b) => a - b);
}

const assert = require('assert');
assert.ok(
  !organizeContainersOfBalls([
    [1, 4],
    [2, 3],
  ])
);
