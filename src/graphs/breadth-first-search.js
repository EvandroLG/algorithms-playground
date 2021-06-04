/*
  BreadthFirstSearch

  You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.
  Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

  Sample Input
  graph = A
       /  |  \
      B   C   D
     / \     / \
    E   F   G   H
       / \   \
      I   J   K

  Sample Output
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
*/

function breadthFirstSearch(graph) {
  const result = [];
  const nodes = Array.from(graph.nodes);
  const queue = [nodes.shift()];
  const visited = new Set();

  while (queue.length) {
    const node = queue.shift();
    result.push(node.value);
    visited.add(node);
    const edges = Array.from(node.edges);

    for (const edge of edges) {
      if (!visited.has(edge)) {
        queue.push(edge);
      }
    }
  }

  return result;
}

const assert = require('assert');
const { Node, Graph } = require('./graph');

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');

nodeA.connect(nodeB);
nodeA.connect(nodeC);
nodeA.connect(nodeD);
nodeB.connect(nodeE);
nodeB.connect(nodeF);
nodeD.connect(nodeG);

const graph = new Graph(nodeA, nodeB, nodeC, nodeD, nodeE, nodeF, nodeG);

assert.deepEqual(breadthFirstSearch(graph), [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
]);
