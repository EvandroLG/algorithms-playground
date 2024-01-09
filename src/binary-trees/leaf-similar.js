/*
  Leaf Similar

  Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
  For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
  Two binary trees are considered leaf-similar if their leaf value sequence is the same.
  Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
  
  Example:
  Input: [3,5,1,6,2,9,8,null,null,7,4], [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
  Output: true
*/

function leafSimilar(root1, root2) {
  const leaves1 = getLeaves(root1);
  const leaves2 = getLeaves(root2);

  if (leaves1.length !== leaves2.length) {
    return false;
  }

  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false;
    }
  }

  return true;
}

function getLeaves(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      output.push(node.val);
    }

    traverse(node.left);
    traverse(node.right);
  })(root);

  return output;
}

const assert = require('assert');

const tree1 = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

const tree2 = {
  val: 1,
  left: {
    val: 3,
  },
  right: {
    val: 2,
  },
};

assert.ok(!leafSimilar(tree1, tree2));
