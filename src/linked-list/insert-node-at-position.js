/*
  Insert Node At Position

  You’re given the pointer to the head node of a linked list, an integer to add to the list and the position at which the integer must be inserted. Create a new node with the given integer, insert this node at the desired position and return the head node.

  Example:
  Input: 3 -> 4 -> 5 -> 6 -> 7 -> null, 10, 2
  Output: 3 -> 4 -> 10 -> 5 -> 6 -> 7 -> null
*/

function insertNodeAtPosition(head, data, position) {
  if (position === 0) {
    const newHead = new SinglyLinkedListNode(data, head);
    return newHead;
  }

  let current = head;
  let i = 1;

  while (current) {
    if (i === position) {
      const next = current.next;
      const newNode = new SinglyLinkedListNode(data);
      current.next = newNode;
      current.next.next = next;
      break;
    }

    current = current.next;
    i++;
  }

  return head;
}

const assert = require('assert');

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new SinglyLinkedListNode(3);
head.next = new SinglyLinkedListNode(4);
head.next.next = new SinglyLinkedListNode(5);
head.next.next.next = new SinglyLinkedListNode(6);
head.next.next.next.next = new SinglyLinkedListNode(7);

const newHead = insertNodeAtPosition(head, 10, 2);
assert.strictEqual(newHead.data, 3);
