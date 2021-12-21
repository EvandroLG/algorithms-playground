/*
  Delete Node

  Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
  Basically, the deletion can be divided into two stages:
  1. Search for a node to remove.
  2. If the node is found, delete the node.

  Example:
  Input: [5,3,6,2,4,null,7], 3
  Output: [5,4,6,2,null,null,7]
*/

function deleteNode(root, value) {
  if (!root) {
    return null;
  }

  if (root.val === value) {
    if (!root.left && !root.right) {
      return null;
    }

    if (root.right) {
      if (!root.left) {
        return root.right;
      }

      insertSubtree(root.right, root.left);
      return root.right;
    }

    return root.left;
  }

  root.left = deleteNode(root.left, value);
  root.right = deleteNode(root.right, value);

  return root;
}

function insertSubtree(root, subtree) {
  if (!root.left) {
    root.left = subtree;
  } else {
    insertSubtree(root.left, subtree);
  }
}

const assert = require('assert');

const tree = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
    },
    right: {
      value: 4,
    },
  },
  right: {
    value: 6,
    right: {
      value: 7,
    },
  },
};

assert.deepEqual(deleteNode(tree, 3), {
  value: 5,
  left: {
    value: 3,
    left: { value: 2, left: null, right: null },
    right: { value: 4, left: null, right: null },
  },
  right: {
    value: 6,
    right: { value: 7, left: null, right: null },
    left: null,
  },
});
