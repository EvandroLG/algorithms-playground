/*
  Symmetric Tree

  Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

  Sample Input
  tree =    1
         /     \
        2       2
      /   \   /   \
     3     4 4     3

  Sample Output
  true
*/

function isMirror(left, right) {
  if (!left && !right) {
    return true;
  }

  if (!left || !right) {
    return false;
  }

  return (
    left.value === right.value &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  );
}

function isSimmetric(root) {
  return isMirror(root, root);
}

const assert = require('assert');
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
    },
    right: {
      value: 4,
    },
  },
  right: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 3,
    },
  },
};

assert.ok(isSimmetric(tree));
