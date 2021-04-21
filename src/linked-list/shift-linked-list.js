/*
  Shift Linked List

  Write a function that takes in the head of a Singly Linked List and integer `k`, shifts the list in place by k positions and returns its new head.

  Sample Input:
  head = 0 -> 1 -> 2 -> 3 -> 4 -> 5
  k = 2

  Sample Output:
  4 -> 5 -> 0 -> 1 -> 2 -> 3
*/

function updateNodesFromHead(head, tail) {
  const tmp = head;
  head = tmp.next;
  tail.next = tmp;
  tmp.next = null;

  return head;
}

function updateNodesFromTail(head, prev, tail) {
  const tmp = head;
  tail.next = tmp;
  prev.next = null;
  head = tail;

  return head;
}

function shiftLinkedListHelper(head, isNegative) {
  let current = head;
  let prev = null;

  while (current) {
    if (!current.next) {
      if (isNegative) {
        head = updateNodesFromHead(head, current);
      } else {
        head = updateNodesFromTail(head, prev, current);
      }

      return head;
    }

    prev = current;
    current = current.next;
  }

  return head;
}

function shiftLinkedList(head, k) {
  if (!head.next) {
    return head;
  }

  const isNegative = k < 0;

  for (let i = 0; i < Math.abs(k); i++) {
    head = shiftLinkedListHelper(head, isNegative);
  }

  return head;
}

const assert = require('assert');
const SinglyLinkedList = require('./singly-linked-list');

const list = new SinglyLinkedList();

for (let i = 0; i < 6; i++) {
  list.setTail(i);
}

const headResult = shiftLinkedList(list.head, 2);
assert.equal(headResult.value, 4);
assert.equal(headResult.next.value, 5);
