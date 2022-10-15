/*
  Kill Process

  You have n processes forming a rooted tree structure.
  You are given two integer arrays pid and ppid, where pid[i] is the ID of the ith process and ppid[i] is the ID of the ith process's parent process.
  Each process has only one parent process but may have multiple children processes.
  Only one process has ppid[i] = 0, which means this process has no parent process (the root of the tree).
  When a process is killed, all of its children processes will also be killed.
  Given an integer kill representing the ID of a process you want to kill, return a list of the IDs of the processes that will be killed.
  You may return the answer in any order.

  Example:
  Input: [1,3,10,5], [3,0,5,3], 5
  Output: [5, 10]
*/

function killProcess(pid, ppid, kill) {
  const tree = buildTree(pid, ppid);
  return removeNodes(tree, kill);
}

function removeNodes(tree, kill, result = []) {
  result.push(kill);
  const nodes = tree[kill];

  if (!nodes) {
    return result;
  }

  for (const node of nodes) {
    removeNodes(tree, node, result);
  }

  return result;
}

function buildTree(pid, ppid) {
  return pid.reduce((acc, value, i) => {
    const parentValue = ppid[i];

    if (!acc.hasOwnProperty(parentValue)) {
      acc[parentValue] = [];
    }

    acc[parentValue].push(value);

    return acc;
  }, {});
}

const assert = require('assert');
assert.deepEqual(killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5), [5, 10]);
