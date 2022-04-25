/*
  Detect Capital Use

  We define the usage of capitals in a word to be right when one of the following cases holds:
  - All letters in this word are capitals, like "USA".
  - All letters in this word are not capitals, like "leetcode".
  - Only the first letter in this word is capital, like "Google".
  Given a string word, return true if the usage of capitals in it is right.

  Example:
  Input: FlaG
  Output: false
*/

function detectCapitalUse(word) {
  let counter = 0;
  let isFirst = false;

  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    const code = c.charCodeAt(c);

    if (code >= 65 && code <= 90) {
      counter++;

      if (i === 0) {
        isFirst = true;
      }
    }
  }

  if (counter === 1 && isFirst) {
    return true;
  }

  if (counter === 0) {
    return true;
  }

  return word.length === counter;
}

const assert = require('assert');
assert.ok(!detectCapitalUse('FlaG'));
