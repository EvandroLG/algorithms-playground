/*
  Find Mode

  Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
  If the tree has more than one mode, return them in any order.

  Example:
  Input: [1,null,2,2]
  Output: [2]
*/

function findMode(root) {
  const map = {};

  (function traverse(node) {
    if (!node) {
      return;
    }

    if (!map.hasOwnProperty(node.value)) {
      map[node.value] = 0;
    }

    map[node.value]++;

    traverse(node.left);
    traverse(node.right);
  })(root);

  let max = 0;
  let output = [];

  for (const [key, value] of Object.entries(map)) {
    if (value === max) {
      output.push(key);
    } else if (value > max) {
      max = value;
      output = [key];
    }
  }

  return output;
}

const assert = require('assert');
const tree = {
  value: 1,
  right: {
    value: 2,
    right: {
      value: 2,
    },
  },
};

assert.deepEqual(findMode(tree), [2]);
