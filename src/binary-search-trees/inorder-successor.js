/*
  Inorder Successor

  Given the root of a binary search tree and a node p in it, return the in-order successor of that node in the BST.
  If the given node has no in-order successor in the tree, return null.
  The successor of a node p is the node with the smallest key greater than p.val.

  Example:
  Input: [2,1,3], 1
  Output: 2


*/

function inorderSuccessor(root, p) {
  const arr = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    arr.push(node);
    traverse(node.right);
  })(root);

  const index = arr.indexOf(p);

  if (index === -1 || index + 1 >= arr.length) {
    return null;
  }

  return arr[index + 1];
}

const assert = require('assert');

const tree = {
  value: 2,
  left: {
    value: 1,
  },
  right: {
    value: 3,
  },
};

assert.deepEqual(inorderSuccessor(tree, tree.left), tree);
