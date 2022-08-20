/*
  Most Common Word

  Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned.
  The words in paragraph are case-insensitive and the answer should be returned in lowercase.

  Example:
  Input: "Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]
  Output: "ball"
*/

function mostCommonWord(paragraph, banned) {
  const normalized = normalize(paragraph);
  const words = normalized.split(' ').filter((word) => /[a-z]/.test(word));
  const setBanned = new Set(banned);
  const counter = {};

  for (const word of words) {
    if (setBanned.has(word)) {
      continue;
    }

    if (!counter.hasOwnProperty(word)) {
      counter[word] = 0;
    }

    counter[word]++;
  }

  return mostCommonWordHelper(counter);
}

function normalize(str) {
  const lower = str.toLowerCase();
  const cleaned = clean(lower);
  return cleaned.match(/([a-z]|\s)/g).join('');
}

function clean(str) {
  const keys = ['.', ',', ';', '!', '?'];
  let newStr = str;

  for (const key of keys) {
    newStr = newStr.replace(new RegExp(['\\', key].join(''), 'g'), ' ');
  }

  return newStr;
}

function mostCommonWordHelper(counter) {
  const keys = Object.keys(counter);
  let max = 0;

  for (const key of keys) {
    const value = counter[key];
    max = Math.max(max, value);
  }

  return keys.find((key) => counter[key] === max);
}

const assert = require('assert');
assert.equal(
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit',
  ]),
  'ball'
);
