/*
  Count Good Nodes In Binary Tree

  Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
  Return the number of good nodes in the binary tree.

  Example:
  Input: [3,1,4,3,null,1,5]
  Output: 4
*/

function countGoodNodesInBinaryTree(root) {
  let result = 0;

  (function traverse(node, path) {
    if (!node) {
      return;
    }

    const isValid = !path.some((value) => node.value < value);

    if (isValid) {
      result++;
    }

    traverse(node.left, path.concat(node.value));
    traverse(node.right, path.concat(node.value));
  })(root, []);

  return result;
}

const assert = require('assert');

const tree = {
  value: 3,
  left: {
    value: 3,
    left: {
      value: 4,
    },
    right: {
      value: 2,
    },
  },
};

assert.equal(countGoodNodesInBinaryTree(tree), 3);
