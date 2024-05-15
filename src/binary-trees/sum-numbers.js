/*
  Sum Numbers

  You are given the root of a binary tree containing digits from 0 to 9 only.
  Each root-to-leaf path in the tree represents a number.
  For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
  Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
  A leaf node is a node with no children.

  Example:
  Input: [1,2,3]
  Output: 25
*/

function sumNumbers(root) {
  let result = 0;

  (function traverse(node, sum) {
    if (!node.left && !node.right) {
      result += Number(sum);
    } else {
      if (node.left) {
        traverse(node.left, sum + node.left.value);
      }

      if (node.right) {
        traverse(node.right, sum + node.right.value);
      }
    }
  })(root, '' + root.value);

  return result;
}

const assert = require('assert');

const root = {
  value: 1,
  left: {
    value: 2,
  },
  right: {
    value: 3,
  },
};

assert.strictEqual(sumNumbers(root), 25);
