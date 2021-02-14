/*
  Sum Of Linked Lists

  You're given two Linked Lists of potentially unequal length. Each Linked List represents a non-negative integer, where each node in the Linked List is a digit of that integer, and the first node in each Linked List always represents the least significant digit of the integer. Write a function that returns the head of a new Linked List that represents the sum of the integers represented by the two input Linked Lists.
  Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list. The value of each LinkedList node is always in the range of 0 - 9.
  Note: your function must create and return a new Linked List, and you're not allowed to modify either of the input Linked Lists.

  Sample Input
  linkedListOne = 2 -> 4 -> 7 -> 1
  linkedListTwo = 9 -> 4 -> 5

  Sample Output
  1 -> 9 -> 2 -> 2
*/

const LinkedList = require('./singly-linked-list');

function getValue(value) {
  const newValue = value + '';
  return [newValue[1], newValue[0]];
}

function getValueAndRest(valueOne, valueTwo) {
  let value = valueOne + valueTwo;
  let rest = 0;

  if (value > 9) {
    const [newValue, newRest] = getValue(value);
    value = Number(newValue);
    rest = Number(newRest);
  }

  return {
    value,
    rest,
  };
}

function sumOfLinkedLists(listOne, listTwo) {
  const list = new LinkedList();
  let { value, rest } = getValueAndRest(listOne.value, listTwo.value);
  list.setHead(value);
  const head = list.head;
  let currentOne = listOne.next;
  let currentTwo = listTwo.next;

  while (currentOne || currentTwo) {
    const valueOne = (currentOne || {}).value ? currentOne.value : 0;
    const valueTwo = (currentTwo || {}).value ? currentTwo.value : 0;
    const { value: newValue, rest: newRest } = getValueAndRest(
      valueOne,
      valueTwo + rest
    );

    rest = newRest;
    list.setTail(newValue);

    currentOne = currentOne ? currentOne.next : null;
    currentTwo = currentTwo ? currentTwo.next : null;
  }

  if (rest > 0) {
    list.setTail(rest);
  }

  return head;
}

const assert = require('assert');

const listOne = new LinkedList();
[2, 4, 7, 1].forEach((value) => {
  listOne.setTail(value);
});

const listTwo = new LinkedList();
[9, 4, 5].forEach((value) => {
  listTwo.setTail(value);
});

const listExpected = new LinkedList();
[1, 9, 2, 2].forEach((value) => {
  listExpected.setTail(value);
});

assert.deepEqual(
  sumOfLinkedLists(listOne.head, listTwo.head),
  listExpected.head
);
