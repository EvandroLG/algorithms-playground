/*
  Add Bold Tag In String

  You are given a string s and an array of strings words.
  You should add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in words.
  - If two such substrings overlap, you should wrap them together with only one pair of closed bold-tag.
  - If two substrings wrapped by bold tags are consecutive, you should combine them.

  Example:
  Input: "abcxyz123", ["abc","123"]
  Output: "<b>abc</b>xyz<b>123</b>"
*/

function addBoldTagInString(s, words) {
  const pairs = [];

  for (const word of words) {
    let startIdx = s.indexOf(word);

    while (startIdx !== -1) {
      const endIdx = startIdx + word.length - 1;
      pairs.push([startIdx, endIdx]);
      startIdx = s.indexOf(word, startIdx + 1);
    }
  }

  const intervals = mergeIntervals(pairs);
  const fragments = s.split('');

  for (const [startIdx, endIdx] of intervals) {
    fragments[startIdx] = `<b>${fragments[startIdx]}`;
    fragments[endIdx] = `${fragments[endIdx]}</b>`;
  }

  return fragments.join('');
}

function mergeIntervals(arr) {
  const merged = [];
  arr.sort((a, b) => a[0] - b[0]);

  for (const [startIdx, endIdx] of arr) {
    const lastIdx = merged.length - 1;

    if (!merged.length || merged[lastIdx][1] < startIdx) {
      merged.push([startIdx, endIdx]);
    } else {
      merged[lastIdx][1] = Math.max(merged[lastIdx][1], endIdx);
    }
  }

  return mergeConsecutiveTags(merged);
}

function mergeConsecutiveTags(arr) {
  const merged = [];

  for (const [startIdx, endIdx] of arr) {
    const lastIdx = merged.length - 1;

    if (!merged.length || merged[lastIdx][1] + 1 !== startIdx) {
      merged.push([startIdx, endIdx]);
    } else {
      merged[lastIdx][1] = endIdx;
    }
  }

  return merged;
}

const assert = require('assert');
assert.strictEqual(
  addBoldTagInString('abcxyz123', ['abc', '123']),
  '<b>abc</b>xyz<b>123</b>'
);
