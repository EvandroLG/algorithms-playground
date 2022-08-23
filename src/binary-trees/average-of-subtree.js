/*
  Average Of Subtree

  Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

  Example:
  Input: [4,8,5,0,1,null,6]
  Output: 5
*/

function averageOfSubtree(root) {
  let output = 0;

  (function traverse(node) {
    if (!node) {
      return [0, 0];
    }

    const [leftResult, counterLeft] = traverse(node.left);
    const [rightResult, counterRight] = traverse(node.right);
    const result = node.value + leftResult + rightResult;
    const counter = 1 + counterLeft + counterRight;

    if (Math.floor(result / counter) === node.value) {
      output++;
    }

    return [result, counter];
  })(root);

  return output;
}

const assert = require('assert');
const tree = {
  value: 4,
  left: {
    value: 8,
    left: {
      value: 0,
    },
    right: {
      value: 1,
    },
  },
  right: {
    value: 5,
    right: {
      value: 6,
    },
  },
};

assert.equal(averageOfSubtree(tree), 5);
