/*
  Increasing Order Search Tree

  Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

  Example:
  Input: [5,1,7]
  Output: [1, null, 5, null, 7]
*/

function increasingOrderSearchTree(root) {
  const arr = toArray(root);
  return toBst(arr);
}

function toArray(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    output.push(node.value);
    traverse(node.right);
  })(root);

  return output;
}

function toBst(arr) {
  if (!arr.length) {
    return;
  }

  const root = { value: arr.shift() };

  (function helper(node) {
    if (!arr.length) {
      return;
    }

    node.right = { value: arr.shift() };
    helper(node.right);
  })(root);

  return root;
}

const assert = require('assert');
const tree = {
  value: 1,
  right: {
    value: 5,
    right: {
      value: 7,
    },
  },
};

assert.deepEqual(increasingOrderSearchTree(tree), {
  value: 1,
  right: {
    value: 5,
    right: {
      value: 7,
    },
  },
});
