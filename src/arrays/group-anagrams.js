/*
  Group Anagrams
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  Example 1:
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

  Example 2:
  Input: strs = [""]
  Output: [[""]]

  Example 3:
  Input: strs = ["a"]
  Output: [["a"]]
*/

function sortStr(value) {
  return value.split('').sort().join('');
}

function groupAnagrams(arr) {
  const words = {};

  for (const word of arr) {
    const sorted = sortStr(word);

    if (!words.hasOwnProperty(sorted)) {
      words[sorted] = [];
    }

    words[sorted].push(word);
  }

  return Object.values(words);
}

const assert = require('assert');
assert.deepEqual(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [
  ['eat', 'tea', 'ate'],
  ['tan', 'nat'],
  ['bat'],
]);
