/*
  Most Frequent Tree Sum

  Given the root of a binary tree, return the most frequent subtree sum.
  If there is a tie, return all the values with the highest frequency in any order.
  The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

  Example:
  Input: [5,2,-3]
  Output: [2,-3,4]
*/

function mostFrequentTreeSum(root) {
  const mostFrequent = {};

  (function traverse(node) {
    if (!node) {
      return 0;
    }

    const sumLeft = traverse(node.left);
    const sumRight = traverse(node.right);
    const sum = sumLeft + sumRight + node.value;

    if (!mostFrequent.hasOwnProperty(sum)) {
      mostFrequent[sum] = 0;
    }

    mostFrequent[sum]++;

    return sum;
  })(root);

  const entries = Object.entries(mostFrequent).sort((a, b) => b[1] - a[1]);
  const max = entries[0][1];
  const output = [];

  for (const [sum, total] of entries) {
    if (total != max) {
      break;
    }

    output.push(+sum);
  }

  return output;
}

const assert = require('assert');

const tree = {
  value: 5,
  left: {
    value: 2,
  },
  right: {
    value: -3,
  },
};

assert.deepEqual(
  mostFrequentTreeSum(tree).sort((a, b) => a - b),
  [-3, 2, 4]
);
