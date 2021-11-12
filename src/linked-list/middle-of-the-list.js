/*
  Middle Of The List

  Given the head of a singly linked list, return the middle node of the linked list.
  If there are two middle nodes, return the second middle node.

  Example:
  Input: [1,2,3,4,5]
  Output: [3,4,5]
*/

function middleOfTheList(head) {
  let node = head;
  const output = [];

  while (node) {
    output.push(node);
    node = node.next;
  }

  const idx = Math.floor(output.length / 2);

  return output[idx];
}

const assert = require('assert');
const LinkedList = require('./singly-linked-list');
const list = new LinkedList();

for (let i = 1; i <= 5; i++) {
  list.setTail(i);
}

assert.equal(middleOfTheList(list.head).value, 3);
