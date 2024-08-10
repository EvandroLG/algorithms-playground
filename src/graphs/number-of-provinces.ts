/*
  Number Of Provinces

  There are n cities. Some of them are connected, while some are not.
  If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
  A province is a group of directly or indirectly connected cities and no other cities outside of the group.
  You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
  Return the total number of provinces.

  Example:
  Input: [[1,1,0],[1,1,0],[0,0,1]]
  Output: 2
*/

import { strictEqual } from 'assert';

type Graph = Map<number, Set<number>>;

function numberOfProvinces(isConnected: number[][]): number {
  const graph = buildGraph(isConnected);
  const visited = new Set();
  let result = 0;

  function traverse(node: number): void {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);

    const connections = graph.get(node) as Set<number>;

    for (const connection of connections) {
      traverse(connection);
    }
  }

  for (const [node] of graph) {
    if (!visited.has(node)) {
      traverse(node);
      result++;
    }
  }

  return result;
}

function buildGraph(isConnected: number[][]): Graph {
  const graph: Graph = new Map();

  for (let i = 0; i < isConnected.length; i++) {
    if (!graph.has(i)) {
      graph.set(i, new Set<number>());
    }

    for (let j = 0; j < isConnected[i].length; j++) {
      if (i === j) {
        continue;
      }

      if (isConnected[i][j] === 1) {
        graph.get(i)!.add(j);
      }
    }
  }

  return graph;
}

strictEqual(
  numberOfProvinces([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
  2
);
