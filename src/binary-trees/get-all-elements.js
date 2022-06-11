/*
  Get All Elements

  Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

  Example:
  Input: [2,1,4], [1,0,3]
  Output: [0,1,1,2,3,4]
*/

function getAllElements(root1, root2) {
  const output = [...convertToArray(root1), ...convertToArray(root2)];

  return output.sort((a, b) => a - b);
}

function convertToArray(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    output.push(node.value);

    traverse(node.left);
    traverse(node.right);
  })(root);

  return output;
}

const assert = require('assert');

const root1 = {
  value: 2,
  left: {
    value: 1,
  },
  right: {
    value: 4,
  },
};

const root2 = {
  value: 1,
  left: {
    value: 0,
  },
  right: {
    value: 3,
  },
};

assert.deepEqual(getAllElements(root1, root2), [0, 1, 1, 2, 3, 4]);
