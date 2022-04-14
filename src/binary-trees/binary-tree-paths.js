/*
  Binary Tree Paths

  Given the root of a binary tree, return all root-to-leaf paths in any order.
  A leaf is a node with no children.

  Example:
  Input: [1,2,3,null,5]
  Output: ["1->2->5","1->3"]
*/

function binaryTreePaths(root) {
  const output = [];

  (function traverse(node, sub) {
    if (!node) {
      return;
    }

    sub.push(node.value);

    if (!node.left && !node.right) {
      output.push(sub.join('->'));
    } else {
      traverse(node.left, sub.slice());
      traverse(node.right, sub.slice());
    }
  })(root, []);

  return output;
}

const assert = require('assert');
const tree = {
  value: 1,
  left: {
    value: 2,
    right: {
      value: 5,
    }
  },
  right: {
    value: 3
  }
};

assert.deepEqual(binaryTreePaths(tree), ['1->2->5', '1->3']);
