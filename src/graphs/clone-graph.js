/*
  Clone Graph

  Given a reference of a node in a connected undirected graph.
  Return a deep copy (clone) of the graph.

  Example:
  Input: [[2,4],[1,3],[2,4],[1,3]]
  Output: [[2,4],[1,3],[2,4],[1,3]]
*/

function cloneGraph(node) {
  if (!node) {
    return node;
  }

  return traverse(node, new Map());
}

function traverse(node, visited) {
  if (visited.has(node)) {
    return visited.get(node);
  }

  const cloneNode = new Node(node.value);
  visited.set(node, cloneNode);

  for (neighbor of node.neighbors) {
    cloneNode.neighbors.push(traverse(neighbor, visited));
  }

  return cloneNode;
}

class Node {
  constructor(value, neighbors = []) {
    this.value = value;
    this.neighbors = neighbors;
  }
}

const assert = require('assert');

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2, node3);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node1, node2);
node4.neighbors.push(node2, node3);

assert.deepStrictEqual(cloneGraph(node1), node1);
