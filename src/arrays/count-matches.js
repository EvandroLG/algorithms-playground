/*
  Count Matches

  You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item.
  You are also given a rule represented by two strings, ruleKey and ruleValue.

  The ith item is said to match the rule if one of the following is true:
  - ruleKey == "type" and ruleValue == typei
  - ruleKey == "color" and ruleValue == colori
  - ruleKey == "name" and ruleValue == namei.

  Return the number of items that match the rule.

  Example:
  Input: [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color","silver"
  Output: 1
*/

function countMatches(items, ruleKey, ruleValue) {
  const keys = {
    type: 0,
    color: 1,
    name: 2,
  };

  const key = keys[ruleKey];

  return items.reduce((acc, item) => {
    if (item[key] === ruleValue) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

const assert = require('assert');
const items = [
  ['phone', 'blue', 'pixel'],
  ['computer', 'silver', 'lenovo'],
  ['phone', 'gold', 'iphone'],
];

assert.equal(countMatches(items, 'color', 'silver'), 1);
