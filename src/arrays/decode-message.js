/*
  Decode Message

  You are given a 2-D array of characters. There is a hidden message in it.

  I B C A L K A
  D R F C A E A
  G H O E L A D

  The way to collect the message is as follows
  1. start at top left
  2. move diagonally down right
  3. when cannot move any more, try to switch to diagonally up right
  4. when cannot move any more, try switch to diagonally down right, repeat 3
  5. stop when cannot neither move down right or up right. the character on the path is the message
  6. for the input above, IROCLED should be returned.
*/

function decodeMessage(arr) {
  const result = [];

  let i = 0;
  let j = 0;
  let shouldGoRight = true;

  while (result.length < (arr.length ? arr[0] : []).length) {
    result.push(arr[i][j]);

    if (i === 0) {
      shouldGoRight = true;
    } else if (i === arr.length - 1) {
      shouldGoRight = false;
    }

    if (shouldGoRight) {
      i++;
    } else {
      i--;
    }

    j++;
  }

  return result.join('');
}

const assert = require('assert');

const arr = [
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D'],
];

assert.equal(decodeMessage(arr), 'IROCLED');
