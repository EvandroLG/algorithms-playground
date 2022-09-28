/*
  Find Nearest Right Node

  Given the root of a binary tree and a node u in the tree, return the nearest node on the same level that is to the right of u, or return null if u is the rightmost node in its level.

  Example:
  Input: [1,2,3,null,4,5,6], 4
  Output: 5
*/

function findNearestRightNode(root, u) {
  const queue = [root];

  while (queue.length) {
    const newQueue = queue.slice();
    queue.length = 0;
    let found = false;

    while (newQueue.length) {
      const node = newQueue.shift();

      if (found) {
        return node;
      }

      found = node === u;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    if (found) {
      return null;
    }
  }

  return null;
}

const assert = require('assert');
const tree = {
  value: 1,
  left: {
    value: 2,
    right: {
      value: 4,
    },
  },
  right: {
    value: 3,
    left: {
      value: 5,
    },
    right: {
      value: 6,
    },
  },
};

assert.equal(findNearestRightNode(tree, tree.left.right).value, 5);
