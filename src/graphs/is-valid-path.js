/*
  Is Valid Path

  There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
  You want to determine if there is a valid path that exists from vertex start to vertex end.
  Given edges and the integers n, start, and end, return true if there is a valid path from start to end, or false otherwise.

  Example:
  Input: edges = [[0,1],[1,2],[2,0]], start = 0, end = 2
  Output: true
*/

function isValidPath(edges, start, end) {
  const graph = edges.reduce((acc, [v1, v2]) => {
    if (!acc.hasOwnProperty(v1)) {
      acc[v1] = [];
    }

    if (!acc.hasOwnProperty(v2)) {
      acc[v2] = [];
    }

    acc[v1].push(v2);
    acc[v2].push(v1);

    return acc;
  }, {});

  const visited = new Set();

  return (function isValidPathHelper(startIdx) {
    visited.add(startIdx);
    const connections = graph[startIdx];

    if (connections.includes(end)) {
      return true;
    }

    for (const vertice of connections) {
      if (!visited.has(vertice) && isValidPathHelper(vertice)) {
        return true;
      }
    }

    return false;
  })(start);
}

const assert = require('assert');

assert.ok(
  isValidPath(
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);

assert.ok(
  !isValidPath(
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
