/*
  ReverseLinkedList

  Write a function that takes in the head of a Singly Linked List, reverses the list in place (i.e., doesn't create a brand new list), and returns its new head.
  Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.
  You can assume that the input Linked List will always have at least one node; in other words, the head will never be None / null.

  Sample Input
  head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 // the head node with value 0

  Sample Output
  5 -> 4 -> 3 -> 2 -> 1 -> 0 // the new head node with value 5
*/

function reverseLinkedList(head) {
  let current = head;
  let prev = null;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const assert = require('assert');
const LinkedList = require('./singly-linked-list');

const list = new LinkedList();

for (let i = 0; i < 6; i++) {
  list.setTail(i);
}

assert.equal(reverseLinkedList(list.head).value, 5);