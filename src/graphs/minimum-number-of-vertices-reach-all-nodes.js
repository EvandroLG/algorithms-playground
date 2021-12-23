/*
  Minimum Number Of Vertices Reach All Nodes

  Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.
  Find the smallest set of vertices from which all nodes in the graph are reachable.

  Example:
  Input: 6, [[0,1],[0,2],[2,5],[3,4],[4,2]]
  Output: [0, 3]
*/

function minimumNumberOfVerticesReachAllNodes(n, edges) {
  const items = new Set(
    Array(n)
      .fill(1)
      .map((item, idx) => item * idx)
  );

  for (const [, v] of edges) {
    items.delete(v);
  }

  return Array.from(items);
}

const assert = require('assert');
assert.deepEqual(
  minimumNumberOfVerticesReachAllNodes(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ]),
  [0, 3]
);
