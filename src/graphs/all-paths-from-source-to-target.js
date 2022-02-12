/*
  All Paths From Source To Target

  Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
  The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

  Example:
  Input: [[1,2],[3],[3],[]]
  Output: [[0,1,3],[0,2,3]]
*/

function allPathsFromSourceToTarget(graph) {
  const output = [];

  (function traverse(currentNode, connections, path) {
    if (currentNode === graph.length - 1) {
      output.push(path);
    } else {
      for (const node of connections) {
        traverse(node, graph[node], path.concat([node]));
      }
    }
  })(0, graph[0], [0]);

  return output;
}

const assert = require('assert');
assert.deepEqual(allPathsFromSourceToTarget([[1, 2], [3], [3], []]), [
  [0, 1, 3],
  [0, 2, 3],
]);
