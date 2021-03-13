/*
  Binary Tree Level Order Traversal

  Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

  Example 1:
  Input: root = [3,9,20,null,null,15,7]
  Output: [[3],[9,20],[15,7]]

  Example 2:
  Input: root = [1]
  Output: [[1]]

  Example 3:
  Input: root = []
  Output: []
*/

function levelOrderHelper(root) {
  const output = [];
  const queue = [root];

  while (queue.length) {
    const currentLevel = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      currentLevel.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    output.push(currentLevel);
  }

  return output;
}

function binaryTreeLevelOrderTraversal(root) {
  if (!root) {
    return [];
  }

  return levelOrderHelper(root);
}

const assert = require('assert');
const BinaryTree = require('./binary-tree');

const root = new BinaryTree(3);
root.insert(9);
root.insert(20);
root.insert(15);
root.insert(7);

assert.deepEqual(binaryTreeLevelOrderTraversal(root), [[3], [9, 20], [15, 7]]);
