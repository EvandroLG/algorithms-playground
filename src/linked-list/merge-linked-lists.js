/*
  Merge Linked Lists
*/

function mergeLinkedLists(headOne, headTwo) {
  let first = headOne;
  let second = headTwo;
  let prev = null;

  while (first && second) {
    if (first.value < second.value) {
      prev = first;
      first = first.next;
    } else {
      if (prev) {
        prev.next = second;
      }

      prev = second;
      second = second.next;
      prev.next = first;
    }
  }

  if (!first) {
    prev.next = second;
  }

  return headOne.value < headTwo.value ? headOne : headTwo;
}

const assert = require('assert');
const LinkedList = require('./singly-linked-list');

function toArray(head) {
  const arr = [];
  let current = head;

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  return arr;
}

const l1 = new LinkedList();
l1.setTail(1);
l1.setTail(3);

const l2 = new LinkedList();
l2.setTail(0);
l2.setTail(4);
l2.setTail(7);

const merged = mergeLinkedLists(l1.head, l2.head);
const arr = toArray(merged);

assert.deepEqual(arr, [0, 1, 3, 4, 7]);
