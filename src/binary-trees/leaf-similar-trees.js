/*
  Leaf Similar Trees

  Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

  Example:
  Input = [3,5,1,6,2,9,8,null,null,7,4], [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
  Output: true
*/

function leafSimilar(root1, root2) {
  const arr1 = getLeaves(root1);
  const arr2 = getLeaves(root2);

  return isEqual(arr1, arr2);
}

function getLeaves(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      output.push(node.value);
      return;
    }

    traverse(node.left);
    traverse(node.right);
  })(root);

  return output;
}

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');

const tree1 = {
  value: 1,
  left: {
    value: 2,
  },
  right: {
    value: 3,
  },
};

const tree2 = {
  value: 1,
  left: {
    value: 2,
  },
  right: {
    value: 3,
  },
};

assert.ok(leafSimilar(tree1, tree2));
