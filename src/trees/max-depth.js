/*
  Max Depth

  Given a n-ary tree, find its maximum depth.
  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  Example:
  Input: [1,null,3,2,4,null,5,6]
  Output: 3
*/

function maxDepth(root, depth = 0) {
  if (!root) {
    return 0;
  }

  const { children } = root;
  let max = 0;

  for (const child of children) {
    max = Math.max(max, maxDepth(child, depth + 1));
  }

  return max + 1;
}

const assert = require('assert');
const root = {
  value: 1,
  children: [
    {
      value: 3,
      children: [{ value: 5, children: [] }],
    },
    {
      value: 2,
      children: [],
    },
    {
      value: 4,

      children: [],
    },
  ],
};

assert.equal(maxDepth(root), 3);
