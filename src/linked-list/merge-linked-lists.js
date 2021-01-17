/*
  Merge Linked Lists

  Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.
  Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.
  You can assume that the input linked lists will always have at least one node; in other words, the heads will never be None / null.

  Sample Input
  headOne = 2 -> 6 -> 7 -> 8 // the head node with value 2
  headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 // the head node with value 1

  Sample Output
  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 // the new head node with value 1
*/

// headOne = 2 -> 6 -> 7 -> 8
// headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10
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
