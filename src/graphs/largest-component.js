/*
  Largest Component

  Write a function that takes in the adjacency list of an undirected graph.
  The function should return the size of the largest component in the graph.

  Example:
  Input:
  {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  }

  Output: 4
*/

function largestComponent(graph) {
  const visited = new Set();

  return Object.keys(graph).reduce((acc, key) => {
    const size = traverse(graph, key, visited);
    return Math.max(acc, size);
  }, 0);
}

function traverse(graph, key, visited) {
  if (visited.has(key)) {
    return 0;
  }

  const queue = [key];
  let counter = 0;

  while (queue.length) {
    const node = queue.shift();

    if (!visited.has(node)) {
      counter++;
      visited.add(node);
      queue.push(...graph[node]);
    }
  }

  return counter;
}

const assert = require('assert');

const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2'],
};

assert.equal(largestComponent(graph), 4);
