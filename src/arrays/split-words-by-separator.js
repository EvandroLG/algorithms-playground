/*
  Split Words By Separator

  Given an array of strings words and a character separator, split each string in words by separator.
  Return an array of strings containing the new strings formed after the splits, excluding empty strings.

  Example:
  Input: ["one.two.three","four.five","six"], "."
  Output: ["one","two","three","four","five","six"]
*/

function splitWordsBySeparator(words, separator) {
  const output = [];

  for (const word of words) {
    const fragments = word.split(separator);

    output.push(...fragments);
  }

  return output.filter(Boolean);
}

const assert = require('assert');
assert.deepEqual(
  splitWordsBySeparator(['one.two.three', 'four.five', 'six'], '.'),
  ['one', 'two', 'three', 'four', 'five', 'six']
);
