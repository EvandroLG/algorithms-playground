/*
  Zizag Level Order Traversal

  Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

  Example:
  Input: [3,9,20,null,null,15,7]
  Output: [[3],[20,9],[15,7]]
*/

function zizagLevelOrderTraversal(root) {
  if (!root) {
    return [];
  }

  const nextLevel = [root];
  const output = [];
  let isLeft = false;

  while (nextLevel.length) {
    const currentLevel = nextLevel.slice();
    nextLevel.length = 0;
    const levels = [];
    isLeft = !isLeft;

    while (currentLevel.length) {
      const node = currentLevel.shift();
      levels.push(node.value);

      if (node.left) {
        nextLevel.push(node.left);
      }

      if (node.right) {
        nextLevel.push(node.right);
      }
    }

    if (!isLeft) {
      levels.reverse();
    }

    output.push(levels);
  }

  return output;
}

const assert = require('assert');

const tree = {
  value: 3,
  left: {
    value: 9,
  },
  right: {
    value: 20,
    left: {
      value: 15,
    },
    right: {
      value: 7,
    },
  },
};

assert.deepEqual(zizagLevelOrderTraversal(tree), [[3], [20, 9], [15, 7]]);
