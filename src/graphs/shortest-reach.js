/*
  Shortest Reach

  Consider an undirected graph where each edge weighs 6 units. Each of the nodes is labeled consecutively from 1 to n.
  You will be given a number of queries. For each query, you will be given a list of edges describing an undirected graph.
  After you create a representation of the graph, you must determine and report the shortest distance to each of the other nodes from a given starting position using the breadth-first search algorithm (BFS).
  Return an array of distances from the start node in node number order. If a node is unreachable, return  for that node.

  Example:
  Input: 5, 3, [[1, 2], [1, 3], [3, 4]], 1
  Output: [6, 6, 12, -1]
*/

function shortestReach(n, m, edges, s) {
  const graph = buildGraph(edges);
  const distances = Array(n).fill(-1);
  distances[s - 1] = 0;
  const queue = [s];

  while (queue.length) {
    const node = queue.shift();
    const neighbors = graph.get(node) ?? [];

    for (const neighbor of neighbors) {
      if (distances[neighbor - 1] !== -1) {
        continue;
      }

      distances[neighbor - 1] = distances[node - 1] + 6;
      queue.push(neighbor);
    }
  }

  distances.splice(s - 1, 1);

  return distances;
}

function buildGraph(edges) {
  return edges.reduce((acc, [u, v]) => {
    if (!acc.has(u)) {
      acc.set(u, []);
    }

    if (!acc.has(v)) {
      acc.set(v, []);
    }

    acc.get(u).push(v);
    acc.get(v).push(u);

    return acc;
  }, new Map());
}

const assert = require('assert');
assert.deepStrictEqual(
  shortestReach(
    5,
    3,
    [
      [1, 2],
      [1, 3],
      [3, 4],
    ],
    1
  ),
  [6, 6, 12, -1]
);
