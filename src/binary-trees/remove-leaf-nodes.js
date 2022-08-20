/*
  Remove Leaf Nodes

  Given a binary tree root and an integer target, delete all the leaf nodes with value target.
  Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted.

  Example:
  Input: [1,2,3,2,null,2,4], 2
  Output: [1,null,3,null,4]
*/

function removeLeafNodes(root, target) {
  (function traverse(node, parents = []) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      if (node.value !== target) {
        return;
      }

      const parent = parents.pop();

      if (!parent) {
        root = null;
        return;
      }

      if (parent.left == node) {
        parent.left = null;
      } else {
        parent.right = null;
      }

      traverse(parent, [...parents]);
    } else {
      traverse(node.left, [...parents, node]);
      traverse(node.right, [...parents, node]);
    }
  })(root);

  return root;
}

const assert = require('assert');
const tree = {
  value: 1,
  left: {
    value: 3,
    left: {
      value: 3,
    },
    right: {
      value: 2,
    },
  },
  right: {
    value: 3,
  },
};

assert.deepEqual(removeLeafNodes(tree, 3), {
  value: 1,
  left: {
    value: 3,
    left: null,
    right: {
      value: 2,
    },
  },
  right: null,
});
