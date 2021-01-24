/*
  Has Cycle

  Given head, the head of a linked list, determine if the linked list has a cycle in it.
  There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
  Return true if there is a cycle in the linked list. Otherwise, return false.

  Example 1:
  Input: head = [3,2,0,-4], pos = 1
  Output: true
  Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/

function hasNode(list, current) {
  if (!list) {
    return false;
  }

  return list.some((node) => node === current);
}

function hasCycle(head) {
  const memo = {};
  let current = head;

  while (current) {
    const value = current.value;

    if (hasNode(memo[value], current)) {
      return true;
    }

    if (!memo[value]) {
      memo[value] = [];
    }

    memo[value].push(current);

    current = current.next;
  }

  return false;
}

const assert = require('assert');
const LinkedList = require('./singly-linked-list');

const list = new LinkedList();
list.setHead(3);
list.setTail(2);
list.setTail(0);
list.setTail(-4);
list.tail.next = list.head;

assert.ok(hasCycle(list.head));
list.tail.next = null;
assert.ok(!hasCycle(list.head));
