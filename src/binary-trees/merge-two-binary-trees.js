/*
  Merge Two Binary Trees

  You are given two binary trees root1 and root2.
  Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
  You need to merge the two trees into a new binary tree.
  The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
  Otherwise, the NOT null node will be used as the node of the new tree.

  Example:
  Input: [1,3,2,5], root2 = [2,1,3,null,4,null,7]
  Output: [3,4,5,5,4,null,7]
*/

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function mergeTrees(t1, t2) {
  let root = null;

  (function traverse(node1, node2) {
    if (!node1 && !node2) {
      return null;
    }

    let value = 0;

    if (node1 && node2) {
      value = node1.value + node2.value;
    } else if (node1) {
      value = node1.value;
    } else {
      value = node2.value;
    }

    const newNode = new TreeNode(value);

    if (!root) {
      root = newNode;
    }

    newNode.left = traverse(node1?.left, node2?.left);
    newNode.right = traverse(node1?.right, node2?.right);

    return newNode;
  })(t1, t2);

  return root;
}

const assert = require('assert');

assert.deepEqual(mergeTrees({ value: 1 }, { value: 1, left: { value: 2 } }), {
  value: 2,
  left: {
    value: 2,
    left: null,
    right: null,
  },
  right: null,
});
