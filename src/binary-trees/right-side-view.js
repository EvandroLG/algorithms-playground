/*
  Right Side View

  Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

  Example:
  Input: [1,2,3,null,5,null,4]
  Output: [1, 3, 4]
*/

function rightSideView(root) {
  if (!root) {
    return [];
  }

  const output = [];
  const nextLevel = [root];

  while (nextLevel.length) {
    const currentLevel = nextLevel.slice();
    nextLevel.length = 0;
    let node = null;

    while (currentLevel.length) {
      node = currentLevel.shift();

      if (node.left) {
        nextLevel.push(node.left);
      }

      if (node.right) {
        nextLevel.push(node.right);
      }
    }

    output.push(node.value);
  }

  return output;
}

const assert = require('assert');

const tree = {
  value: 1,
  left: {
    value: 2,
    right: {
      value: 5,
    },
  },
  right: {
    value: 3,
    right: {
      value: 4,
    },
  },
};

assert.deepEqual(rightSideView(tree), [1, 3, 4]);
