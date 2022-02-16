/*
  Average Of Levels In Binary Tree

  Given the root of a binary tree, return the average value of the nodes on each level in the form of an array.
  Answers within 10-5 of the actual answer will be accepted.

  Example:
  Input: [3,9,20,null,null,15,7]
  Output: [3.00000,14.50000,11.00000]
*/

function averageOfLevelsInBinaryTree(root) {
  const queue = [root];
  const output = [];

  while (queue.length) {
    const copy = queue.slice();
    queue.length = 0;
    const items = [];

    while (copy.length) {
      const node = copy.shift();
      items.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    output.push(average(items));
  }

  return output;
}

function average(items) {
  const sum = items.reduce((acc, item) => acc + item);
  return sum / items.length;
}

const assert = require('assert');

const tree = {
  value: 3,
  left: {
    value: 9,
  },
  right: {
    value: 20,
    left: {
      value: 15,
    },
    right: {
      value: 7,
    },
  },
};

assert.deepEqual(averageOfLevelsInBinaryTree(tree), [3.0, 14.5, 11.0]);
