/*
  Frequencies Of Elements

  Given the head of a linked list containing k distinct elements, return the head to a linked list of length k containing the frequency of each distinct element in the given linked list in any order.

  Example:
  Input: [1,1,2,1,2,3]
  Output: [3,2,1]
*/

function frequenciesOfElements(head) {
  const arr = getFrequency(head);
  return fromSetToList(arr);
}

function getFrequency(head) {
  const counter = {};
  let current = head;

  while (current) {
    const value = current.value;

    if (!counter.hasOwnProperty(value)) {
      counter[value] = 0;
    }

    counter[value]++;

    current = current.next;
  }

  return Object.values(counter);
}

function fromSetToList(arr) {
  const head = new ListNode(arr.pop());
  let current = head;

  while (arr.length) {
    current.next = new ListNode(arr.pop());
    current = current.next;
  }

  return head;
}

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

const assert = require('assert');

function listToSet(head) {
  const set = new Set();
  let current = head;
  while (current) {
    set.add(current.value);
    current = current.next;
  }
  return set;
}

const head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3))));
const expected = new ListNode(2, new ListNode(1, new ListNode(1)));

assert.deepStrictEqual(
  listToSet(frequenciesOfElements(head)),
  listToSet(expected)
);
