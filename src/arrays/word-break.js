/*
  Word Break

  Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

  Example:
  Input: "leetcode", ["leet", "code"]
  Output: true
*/

function wordBreak(s, wordDict) {
  return (function helper(currentString, i) {
    if (currentString === s) {
      return true;
    }

    if (currentString.length >= s.length) {
      return false;
    }

    for (let j = 0; j < wordDict.length; j++) {
      const concat = currentString + wordDict[j];
      if (helper(concat, j)) {
        return true;
      }
    }

    return false;
  })('', 0);
}

const assert = require('assert');
assert.ok(wordBreak('leetcode', ['leet', 'code']));
