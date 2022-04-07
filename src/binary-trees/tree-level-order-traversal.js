/*
  Tree Level Order Traversal

  Given an n-ary tree, return the level order traversal of its nodes' values.
  Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value.

  Example:
  Input: [1,null,3,2,4,null,5,6]
  Output: [[1],[3,2,4],[5,6]]
*/

function treeLevelOrderTraversal(root) {
  const queue = [root];
  const output = [];

  while (queue.length) {
    const level = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.value);
      queue.push(...node.children);
    }

    output.push(level);
  }

  return output;
}

const assert = require('assert');

const tree = {
  value: 1,
  children: [
    {
      value: 3,
      children: [
        { value: 5, children: [] },
        { value: 6, children: [] },
      ],
    },
    { value: 2, children: [] },
    { value: 4, children: [] },
  ],
};

assert.ok(treeLevelOrderTraversal(tree), [[1], [3, 2, 4], [5, 6]]);
