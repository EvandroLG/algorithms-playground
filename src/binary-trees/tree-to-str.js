/*
  Tree To Str

  Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.
  Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

  Example:
  Input: [1,2,3,4]
  Output: '1(2(4))(3)'
*/

function treeToStr(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    output.push(node.value);

    if (node.left) {
      output.push('(');
      traverse(node.left);
      output.push(')');
    }

    if (!node.left && node.right) {
      output.push('(', ')');
    }

    if (node.right) {
      output.push('(');
      traverse(node.right);
      output.push(')');
    }
  })(root);

  return output.join('');
}

const assert = require('assert');
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
  },
  right: {
    value: 3,
  },
};

assert.equal(treeToStr(tree), '1(2(4))(3)');
