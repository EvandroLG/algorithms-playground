/*
  Make Equal

  You are given an array of strings words (0-indexed).
  In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].
  Return true if you can make every string in words equal using any number of operations, and false otherwise.

  Example:
  Input: words = ["abc","aabc","bc"]
  Output: true
*/

function makeEqual(words) {
  const map = counter(words);
  const entries = Object.entries(map);

  for (const [_, value] of entries) {
    if (value % words.length != 0) {
      return false;
    }
  }

  return true;
}

function counter(arr) {
  const s = arr.join('');
  const map = {};

  for (const c of s) {
    if (!map.hasOwnProperty(c)) {
      map[c] = 0;
    }

    map[c]++;
  }

  return map;
}

const assert = require('assert');
assert.ok(makeEqual(['abc', 'aabc', 'bc']));
