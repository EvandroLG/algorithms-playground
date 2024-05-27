/*
  Find Eventual Safe States

  There is a directed graph of n nodes with each node labeled from 0 to n - 1.
  The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].
  A node is a terminal node if there are no outgoing edges.
  A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).
  Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

  Example:
  Input: [[1,2],[2,3],[5],[0],[5],[],[]]
  Output: [2,4,5,6]
*/

function findEventualSafeStates(arr) {
  const graph = buildGraph(arr);
  const output = [];
  const nodes = Object.keys(graph);

  for (const node of nodes) {
    if (isNodeSafe(graph, node)) {
      output.push(+node);
    }
  }

  return output;
}

function isNodeSafe(graph, node) {
  const visited = new Set();
  const stack = new Set();

  for (const connection of graph[node]) {
    if (hasCycle(graph, connection, visited, stack)) {
      return false;
    }
  }

  return true;
}

function hasCycle(graph, node, visited, stack) {
  if (stack.has(node)) {
    return true;
  }

  if (visited.has(node)) {
    return false;
  }

  visited.add(node);
  stack.add(node);

  for (const connection of graph[node]) {
    if (hasCycle(graph, connection, visited, stack)) {
      return true;
    }
  }

  stack.delete(node);
  return false;
}

function buildGraph(arr) {
  return arr.reduce((acc, connections, node) => {
    acc[node] = connections;
    return acc;
  }, {});
}

const assert = require('assert');
assert.deepStrictEqual(
  findEventualSafeStates([[1, 2], [2, 3], [5], [0], [5], [], []]),
  [2, 4, 5, 6]
);
