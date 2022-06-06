/*
  Find And Replace Pattern

  Given a list of strings words and a string pattern, return a list of words[i] that match pattern.
  A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

  Example:
  Input: ["abc","deq","mee","aqq","dkd","ccc"], "abb"
  Output: ["mee","aqq"]
*/

function findAndReplacePattern(words, pattern) {
  const map = getMap(pattern);
  const output = [];

  for (const word of words) {
    const newMap = getMap(word);
    if (compare(map, newMap)) {
      output.push(word);
    }
  }

  return output;
}

function compare(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (const [key1, list1] of map1) {
    if (!map2.has(key1)) {
      return false;
    }

    if (list1.length !== map2.get(key1).length) {
      return false;
    }

    for (const item1 of list1) {
      if (!map2.get(key1).has(item1)) {
        return false;
      }
    }
  }

  return true;
}

function getMap(pattern) {
  let idx = 0;
  const map = new Map();
  const letters = {};

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];

    if (!letters.hasOwnProperty(c)) {
      letters[c] = idx;
      map.set(idx, new Set());
      idx++;
    }

    map.get(letters[c]).add(i);
  }

  return map;
}

const assert = require('assert');
assert.deepEqual(
  findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb'),
  ['mee', 'aqq']
);
