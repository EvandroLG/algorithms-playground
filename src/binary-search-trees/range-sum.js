/*
  RangeSum
  Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

  Example 1:
  Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
  Output: 32


  Example 2:
  Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
  Output: 23


  Constraints:
  The number of nodes in the tree is in the range [1, 2 * 104].
  1 <= Node.val <= 105
  1 <= low <= high <= 105
  All Node.val are unique.
*/

function getValue(value, low, high) {
  if (value >= low && value <= high) {
    return value;
  }

  return 0;
}

function rangeSum(tree, low, high) {
  let sum = getValue(tree.value, low, high);

  function helper(root) {
    if (!root) {
      return sum;
    }

    if (root.left) {
      sum = sum + getValue(root.left.value, low, high);
      helper(root.left);
    }

    if (root.right) {
      sum = sum + getValue(root.right.value, low, high);
      helper(root.right);
    }
  }

  helper(tree);

  return sum;
}

const assert = require('assert');
const BinarySearchTree = require('./bst');

const tree = new BinarySearchTree(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(18);

assert.equal(rangeSum(tree, 7, 15), 32);
