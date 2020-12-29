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

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(arr) {
    const queue = [this];

    while (queue.length) {
      const current = queue.shift();
      arr.push(current.name);

      for (const child of current.children) {
        queue.push(child);
      }
    }

    return arr;
  }
}

const assert = require('assert');

const node = new Node('A');
const b = node.addChild('B');
node.addChild('C');
const d = node.addChild('D');
b.addChild('E');
b.addChild('F');
d.addChild('G');

assert.deepEqual(node.breadthFirstSearch([]), [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
]);
