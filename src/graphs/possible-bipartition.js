/*
  Possible Bipartition

  We want to split a group of n people (labeled from 1 to n) into two groups of any size.
  Each person may dislike some other people, and they should not go into the same group.
  Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that the person labeled ai does not like the person labeled bi, return true if it is possible to split everyone into two groups in this way.

  Example:
  Input: 4, [[1,2],[1,3],[2,4]]
  Output: true
*/

function possibleBipartition(n, dislikes) {
  const UNCOLORED = -1;
  const RED = 0;
  const BLUE = 1;
  const graph = buildGraph(n, dislikes);
  const visited = Array(n + 1).fill(UNCOLORED);

  function traverse(node, color) {
    visited[node] = color;
    const nextColor = color === RED ? BLUE : RED;

    for (const dislike of graph.get(node)) {
      if (visited[dislike] === UNCOLORED) {
        if (!traverse(dislike, nextColor)) {
          return false;
        }
      } else if (visited[dislike] !== nextColor) {
        return false;
      }
    }

    return true;
  }

  for (const [node] of graph) {
    if (visited[node] === UNCOLORED && !traverse(node, RED)) {
      return false;
    }
  }

  return true;
}

function buildGraph(n, dislikes) {
  const graph = new Map();

  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }

  return dislikes.reduce((acc, [a, b]) => {
    acc.get(a).push(b);
    acc.get(b).push(a);

    return acc;
  }, graph);
}

const assert = require('assert');
assert.ok(
  possibleBipartition(4, [
    [1, 2],
    [1, 3],
    [2, 4],
  ])
);
