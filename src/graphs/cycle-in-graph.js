/*
  Cycle In Graph

  You're given a list of edges representing an unweighted, directed graph with at least one node. Write a function that returns a boolean representing whether the given graph contains a cycle.
  For the purpose of this question, a cycle is defined as any number of  vertices, including just one vertex, that are connected in a closed chain.
  A cycle can also be defined as a chain of at least one vertex in which the first vertex is the same as the last.
  The given list is what's called an adjacency list, and it represents a graph. The number of vertices in the graph is equal to the length of edges, where each index i in edges contains vertex is outbound edges, in no  particular order.
  Each individual edge is represented by a positive integer that denotes an index (a destination vertex) in the list that this vertex is\n  connected to. Note that these edges are directed, meaning that you can only\n  travel from a particular vertex to its destination, not the other way around\n  (unless the destination vertex itself has an outbound edge to the original\n  vertex).

  Example:
  Input: [
    [1, 3],
    [2, 3, 4],
    [0],
    [],
    [2, 5],
    [],
  ]

  Output: True
*/

function makeGraph(edges) {
  return edges.reduce((acc, connections, key) => {
    acc[key] = connections;
    return acc;
  }, {});
}

function isNodeInCycle(graph, node, visited, inStack) {
  visited[node] = true;
  inStack[node] = true;

  for (const neighbor of graph[node]) {
    if (
      (!visited[neighbor] &&
        isNodeInCycle(graph, neighbor, visited, inStack)) ||
      inStack[neighbor]
    ) {
      return true;
    }
  }

  inStack[node] = false;

  return false;
}

function cycleInGraph(edges) {
  const graph = makeGraph(edges);
  const visited = Array(edges.length).fill(false);
  const inStack = Array(edges.length).fill(false);
  const nodes = Object.keys(graph);

  for (const node of nodes) {
    if (visited[node]) {
      continue;
    }

    if (isNodeInCycle(graph, node, visited, inStack)) {
      return true;
    }
  }

  return false;
}

const assert = require('assert');
const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];

assert.ok(cycleInGraph(edges));
