/*
  N-Ary Tree Preorder Traversal

  Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
  Nary-Tree input serialization is represented in their level order traversal. 

  Example:
  Input: [1,null,3,2,4,null,5,6]
  Output: [1,3,5,6,2,4]
*/

function nAryTreePreorderTraversal(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    output.push(node.value);

    for (const child of node.children) {
      traverse(child);
    }
  })(root);

  return output;
}

const assert = require('assert');

function Node(value, children = []) {
  this.value = value;
  this.children = children;
}

const child1 = new Node(3, [new Node(5), new Node(6)]);
const child2 = new Node(2);
const child3 = new Node(4);
const root = new Node(1, [child1, child2, child3]);

assert.deepEqual(nAryTreePreorderTraversal(root), [1, 3, 5, 6, 2, 4]);
