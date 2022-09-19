/*
  Print List In Reverse

  You are given an immutable linked list, print out all values of each node in reverse with the help of the following interface:
  - ImmutableListNode: An interface of immutable linked list, you are given the head of the list.
  You need to use the following functions to access the linked list:
  - ImmutableListNode.printValue(): Print value of the current node.
  - ImmutableListNode.getNext(): Return the next node.

  Example:
  Input: [1,2,3,4]
  Output: [4,3,2,1]
*/

function printListInReverse(head) {
  if (!head) {
    return;
  }

  printListInReverse(head.getNext());
  head.printValue();
}

const assert = require('assert');
const prints = [];

function ImmutableListNode(idx) {
  this.printValue = function () {
    prints.push(idx);
  };

  this.getNext = function () {
    if (idx === 4) {
      return null;
    }

    return new ImmutableListNode(idx + 1);
  };
}

const list = new ImmutableListNode(1);
printListInReverse(list);
assert.deepEqual(prints, [4, 3, 2, 1]);
