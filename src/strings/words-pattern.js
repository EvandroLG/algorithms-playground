/*
  Words Pattern

  Given a pattern and a string s, find if s follows the same pattern.
  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

  Example:
  Input: 'abba', 'dog cat cat dog'
  Output: true
*/

function createMap(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];

    if (!map.has(c)) {
      map.set(c, new Set());
    }

    map.get(c).add(i);
  }

  return map;
}

function wordsPattern(pattern, s) {
  const mapPattern = createMap(pattern.split(''));
  const mapS = createMap(s.split(' '));

  if (mapPattern.size !== mapS.size) {
    return false;
  }

  const valuesPattern = Array.from(mapPattern.values());
  const valuesS = Array.from(mapS.values());

  for (let i = 0; i < valuesPattern.length; i++) {
    if (valuesPattern[i].size !== valuesS[i].size) {
      return false;
    }

    for (const idx of valuesPattern[i]) {
      if (!valuesS[i].has(idx)) {
        return false;
      }
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(wordsPattern('abba', 'dog cat cat dog'));
