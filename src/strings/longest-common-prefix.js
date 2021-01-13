/*
  Longest Common Prefix

  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

  Example 1:
  Input: strs = ["flower","flow","flight"]
  Output: "fl"

  Example 2:
  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
*/

function longestCommonPrefix(arr) {
  if (!arr.length) {
    return '';
  }

  if (arr.length === 1) {
    arr[0];
  }

  let first = arr[0];
  let longest = '';

  for (let i = 1; i <= first.length; i++) {
    const firstSlice = first.slice(0, i);

    for (let j = 1; j < arr.length; j++) {
      const item = arr[j];
      const secondSlice = item.slice(0, i);

      if (firstSlice !== secondSlice) {
        return longest;
      }
    }

    longest = firstSlice;
  }

  return longest;
}

const assert = require('assert');
assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
