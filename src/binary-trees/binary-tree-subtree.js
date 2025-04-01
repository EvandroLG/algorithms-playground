/*
  Binary Tree Subtree

  Given the roots of two binary trees, root and subRoot, determine whether subRoot is a subtree of root. The function should return true if there exists a subtree within root that has the same structure and node values as subRoot. If no such subtree exists, return false.
  The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

  Example:
  Input: root = [3,4,5,1,2], subRoot = [4,1,2]
  Output: true
*/

function binaryTreeSubtree(root, subRoot) {
  let result = false;

  (function traverse(node) {
    if (!node) {
      return;
    }

    if (node.val === subRoot.val && isSubtree(node, subRoot)) {
      result = true;
      return;
    }

    traverse(node.left);
    traverse(node.right);
  })(root);

  return result;
}

function isSubtree(root, subRoot) {
  let result = true;

  (function traverse(nodeA, nodeB) {
    if (!nodeA && !nodeB) {
      return;
    }

    if ((!nodeA && nodeB) || (nodeA && !nodeB)) {
      result = false;
      return;
    }

    if (nodeA.val !== nodeB.val) {
      result = false;
      return;
    }

    traverse(nodeA.left, nodeB.left);
    traverse(nodeA.right, nodeB.right);
  })(root, subRoot);

  return result;
}

const assert = require('assert');

const root = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: null,
    right: null,
  },
};

const subRoot = {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

assert.ok(binaryTreeSubtree(root, subRoot));
