/*
  Construct From Preorder And Inorder

  Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and
  inorder is the inorder traversal of the same tree, construct and return the binary tree.

  Example:
  Input: [3,9,20,15,7], [9,3,15,20,7]
  Output: [3,9,20,null,null,15,7]
*/

function constructFromPreorderAndInorder(preorder, inorder) {
  const inorderMap = inorder.reduce((acc, item, idx) => {
    acc.set(item, idx);
    return acc;
  }, new Map());

  let preorderIdx = 0;

  return (function traverse(left, right) {
    if (left > right) {
      return null;
    }

    const value = preorder[preorderIdx];
    const root = { value };
    preorderIdx++;

    root.left = traverse(left, inorderMap.get(value) - 1);
    root.right = traverse(inorderMap.get(value) + 1, right);

    return root;
  })(0, preorder.length - 1);
}

const assert = require('assert');
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

assert.deepEqual(constructFromPreorderAndInorder(preorder, inorder), {
  value: 3,
  left: {
    value: 9,
    left: null,
    right: null,
  },
  right: {
    value: 20,
    left: {
      value: 15,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
});
