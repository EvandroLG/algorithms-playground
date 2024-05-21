/*
  Word Break

  Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

  Example:
  Input: "leetcode", ["leet", "code"]
  Output: true
*/

function wordBreak(s, wordDict) {
  const memo = {};

  return (function helper(idx = 0) {
    if (idx >= s.length) {
      return true;
    }

    if (!memo.hasOwnProperty(idx)) {
      for (let i = idx + 1; i <= s.length; i++) {
        if (wordDict.includes(s.slice(idx, i)) && helper(i)) {
          memo[idx] = true;
          return memo[idx];
        }
      }

      memo[idx] = false;
    }

    return memo[idx];
  })();
}

const assert = require('assert');
assert.ok(wordBreak('leetcode', ['leet', 'code']));
