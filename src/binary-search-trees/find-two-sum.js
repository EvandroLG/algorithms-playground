/*
  Find Two Sum

  Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

  Example:
  Input: [5,3,6,2,4,null,7], 9
  Output: true
*/

function findTwoSum(root, target) {
  const memo = new Set();

  return (function traverse(node) {
    if (!node) {
      return false;
    }

    const diff = target - node.value;

    if (memo.has(diff)) {
      return true;
    }

    memo.add(node.value);

    return traverse(node.left) || traverse(node.right);
  })(root);
}

const assert = require('assert');
const BinarySearchTree = require('./bst');

const root = new BinarySearchTree(5);
root.insert(3);
root.insert(6);
root.insert(2);
root.insert(4);
root.insert(7);

assert.ok(findTwoSum(root, 9));
