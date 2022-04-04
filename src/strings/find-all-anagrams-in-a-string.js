/*
  Find All Anagrams In A String

  Given two strings s and p, return an array of all the start indices of p's anagrams in s.
  You may return the answer in any order.

  Example:
  Input: "cbaebabacd", "abc"
  Output: [0,6]
*/

function findAllAnagramsInAString(str, sub) {
  if (sub.length > str.length) {
    return [];
  }

  const output = [];
  const counterSub = buildCounter(sub);
  const counterStr = new Map();

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (counterStr.has(c)) {
      counterStr.set(c, counterStr.get(c) + 1);
    } else {
      counterStr.set(c, 1);
    }

    if (i >= sub.length) {
      const lastC = str[i - sub.length];

      if (counterStr.get(lastC) === 1) {
        counterStr.delete(lastC);
      } else {
        counterStr.set(lastC, counterStr.get(lastC) - 1);
      }
    }

    if (compare(counterStr, counterSub)) {
      output.push(i - sub.length + 1);
    }
  }

  return output;
}

function buildCounter(s) {
  return s.split('').reduce((acc, c) => {
    if (acc.has(c)) {
      acc.set(c, acc.get(c) + 1);
    } else {
      acc.set(c, 1);
    }

    return acc;
  }, new Map());
}

function compare(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (const [key, value] of map1) {
    if (!map2.has(key)) {
      return false;
    }

    if (map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.deepEqual(findAllAnagramsInAString('cbaebabacd', 'abc'), [0, 6]);
