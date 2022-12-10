/*
  Merge In Between

  You are given two linked lists: list1 and list2 of sizes n and m respectively.
  Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

  Example:
  Input: [0,1,2,3,4,5], 3, 4, [1000000,1000001,1000002]
  Output: [0,1,2,1000000,1000001,1000002,5]
*/

function mergeInBetween(list1, a, b, list2) {
  const array1 = convertToArray(list1);
  const array2 = convertToArray(list2);
  const newArray = [];

  for (let i = 0; i < array1.length; i++) {
    if (i < a) {
      newArray.push(array1[i]);
    } else if (i === a) {
      newArray.push(...array2);
      i = b;
    } else {
      newArray.push(array1[i]);
    }
  }

  return convertToLinkedList(newArray);
}

function convertToArray(head) {
  const output = [];
  let current = head;

  while (current) {
    output.push(current.value);
    current = current.next;
  }

  return output;
}

function convertToLinkedList(arr) {
  if (!arr.length) {
    return null;
  }

  const [item1, ...rest] = arr;
  const head = { value: item1, next: null };
  let current = head;

  for (const item of rest) {
    current.next = { value: item, next: null };
    current = current.next;
  }

  return head;
}

const assert = require('assert');

const list1 = {
  value: 0,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null,
          },
        },
      },
    },
  },
};

const list2 = {
  value: 1000000,
  next: {
    value: 1000001,
    next: {
      value: 1000002,
      next: null,
    },
  },
};

const expected = {
  value: 0,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 1000000,
        next: {
          value: 1000001,
          next: {
            value: 1000002,
            next: {
              value: 5,
              next: null,
            },
          },
        },
      },
    },
  },
};

assert.deepEqual(mergeInBetween(list1, 3, 4, list2), expected);
