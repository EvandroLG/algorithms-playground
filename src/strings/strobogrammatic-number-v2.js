/*
  Strobogrammatic Number V2

  Given an integer n, return all the strobogrammatic numbers that are of length n.
  You may return the answer in any order.

  Example:
  Input: 2
  Output: ["11","69","88","96"]
*/

const map = {
  0: '0',
  1: '1',
  6: '9',
  9: '6',
  8: '8',
};

function strobogrammaticNumberV2(n) {
  const numbers = Object.keys(map);

  const output = [];

  (function helper(result) {
    if (result.length > n) {
      return;
    }

    if (result.length === n && isValid(result)) {
      output.push(result.join(''));
    } else {
      for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i]);
        helper(result.slice());
        result.pop();
      }
    }
  })([]);

  return output;
}

function isValid(arr) {
  if (arr.length > 1 && arr[0] === '0') {
    return false;
  }

  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 <= p2) {
    if (map[arr[p1]] !== arr[p2]) {
      return false;
    }

    p1++;
    p2--;
  }

  return true;
}

const assert = require('assert');
assert.deepStrictEqual(strobogrammaticNumberV2(2), ['11', '69', '88', '96']);
