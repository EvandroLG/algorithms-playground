/*
  Destination City

  You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
  Return the destination city, that is, the city without any path outgoing to another city.
  It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

  Example:
  Input: [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
  Output: "Sao Paulo"
*/

function destinationCity(paths) {
  const memo = paths.reduce((acc, [cityA, cityB]) => {
    acc[cityA] = cityB;

    if (!acc.hasOwnProperty(cityB)) {
      acc[cityB] = null;
    }

    return acc;
  }, {});

  const keys = Object.keys(memo);

  for (const key of keys) {
    if (!memo[key]) {
      return key;
    }
  }
}

const assert = require('assert');
assert.equal(
  destinationCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo'],
  ]),
  'Sao Paulo'
);
