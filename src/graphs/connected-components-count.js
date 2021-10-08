/*
  Connected Components Count

  Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
  The function should return the number of connected components within the graph.

  Example:
  Input:
  {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }

  Output:
  2
*/

function connectedComponentsCount(graph) {
  const visited = new Set();

  return Object.keys(graph).reduce((acc, key) => {
    acc += traverse(graph, key, visited);
    return acc;
  }, 0);
}

function traverse(graph, key, visited) {
  if (visited.has('' + key)) {
    return 0;
  }

  const queue = [key];

  while (queue.length) {
    const node = queue.shift();

    if (!visited.has('' + node)) {
      visited.add('' + node);
      const edges = graph[node];
      queue.push(...edges);
    }
  }

  return 1;
}

const assert = require('assert');
const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

assert.equal(connectedComponentsCount(graph), 2);
