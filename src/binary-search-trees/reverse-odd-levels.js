/*
  Reverse Odd Levels

  Given the root of a perfect binary tree, reverse the node values at each odd level of the tree.
  - For example, suppose the node values at level 3 are [2,1,3,4,7,11,29,18], then it should become [18,29,11,7,4,3,1,2].
  Return the root of the reversed tree.
  A binary tree is perfect if all parent nodes have two children and all leaves are on the same level.
  The level of a node is the number of edges along the path between it and the root node.

  Example:
  Input: [2,3,5,8,13,21,34]
  Output: [2,5,3,8,13,21,34]
*/

function reverseOddLevels(root) {
  const queue = [root];
  let level = 0;

  while (queue.length) {
    const copy = queue.slice();
    queue.length = 0;

    while (copy.length) {
      const node = copy.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    if (isEven(level)) {
      reverse(queue);
    }

    level++;
  }

  return root;
}

function isEven(value) {
  return !(value % 2);
}

function reverse(nodes) {
  let p1 = 0;
  let p2 = nodes.length - 1;

  while (p1 < p2) {
    const tmp = nodes[p1].val;
    nodes[p1].val = nodes[p2].val;
    nodes[p2].val = tmp;

    p1++;
    p2--;
  }
}

const assert = require('assert');
const root = {
  val: 7,
  left: {
    val: 13,
  },
  right: {
    val: 11,
  },
};

assert.deepEqual(reverseOddLevels(root), {
  val: 7,
  left: {
    val: 11,
  },
  right: {
    val: 13,
  },
});
