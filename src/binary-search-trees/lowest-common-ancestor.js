/*
  Lowest Common Ancestor

  Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

  Example:
  Input: [6,2,8,0,4,7,9,null,null,3,5], 2, 8
  Output: 6
*/

function lowestCommonAncestor(root, p, q) {
  const parentValue = root.value;
  const pValue = p.value;
  const qValue = q.value;

  if (pValue > parentValue && qValue > parentValue) {
    return lowestCommonAncestor(root.right, p, q);
  }

  if (pValue < parentValue && qValue < parentValue) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
}

const assert = require('assert');
const BinarySearchTree = require('./bst');

const root = new BinarySearchTree(6);
root.insert(2);
root.insert(8);
root.insert(0);
root.insert(4);
root.insert(3);
root.insert(5);
root.insert(7);
root.insert(9);

assert.equal(lowestCommonAncestor(root, 2, 8).value, 6);
