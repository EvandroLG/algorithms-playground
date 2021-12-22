/*
  Lowest Common Ancestor

  Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

  Example:
  Input: [3,5,1,6,2,0,8,null,null,7,4], 5, 1
  Output: 3
*/

function lowestCommonAncestor(root, p, q) {
  let lowest = null;

  (function traverse(node) {
    if (!node) {
      return false;
    }

    const left = traverse(node.left);
    const right = traverse(node.right);
    const middle = node === p || node === q;

    if (left + right + middle >= 2) {
      lowest = node;
    }

    return middle || left || right;
  })(root);

  return lowest;
}

const assert = require('assert');
const p = {
  value: 5,
  left: {
    value: 6,
  },
  right: {
    value: 2,
  },
};

const q = {
  value: 1,
  left: {
    value: 0,
  },
  right: {
    value: 8,
  },
};

const tree = {
  value: 3,
  left: p,
  right: q,
};

assert.equal(lowestCommonAncestor(tree, p, q).value, 3);
