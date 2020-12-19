/*
  DeleteNode
  Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node.

  EXAMPLE
  Input: the node ‘c’ from the linked list a->b->c->d->e
  Result: nothing is returned, but the new linked list looks like a->b->d->e
*/

function deleteNode(node) {
  const next = node.next;

  if (next) {
    node.value = next.value;
    node.next = next.next;
  } else {
    node = null;
  }
}

const assert = require('assert');
const LinkedList = require('./singly-linked-list');

const list = new LinkedList();
const values = ['a', 'b', 'c', 'd', 'e'];

for (const value of values) {
  list.setTail(value);
}

const node = list.findNode('c');
deleteNode(node);

assert.ok(!list.contains('c'));
