/*
  Generate Tags

  Write a function that takes in a positive integer and returns an Array of all the valid strings
  that you can generate with that number of matched `<div></div>`.

  Input: 3
  Output: [
    '<div><div><div></div></div></div>',
    '<div><div></div><div></div></div>',
    '<div><div></div></div><div></div>',
    '<div></div><div><div></div></div>',
    '<div></div><div></div><div></div>',
  ]
*/

function generateTags(num) {
  const output = [];

  (function generate(numOfOpenTags, numOfCloseTags, prefix) {
    if (numOfOpenTags) {
      generate(numOfOpenTags - 1, numOfCloseTags, prefix + '<div>', output);
    }

    if (numOfOpenTags < numOfCloseTags) {
      generate(numOfOpenTags, numOfCloseTags - 1, prefix + '</div>', output);
    }

    if (!numOfCloseTags) {
      output.push(prefix);
    }
  })(num, num, '');

  return output;
}

const assert = require('assert');
assert.deepEqual(generateTags(3), [
  '<div><div><div></div></div></div>',
  '<div><div></div><div></div></div>',
  '<div><div></div></div><div></div>',
  '<div></div><div><div></div></div>',
  '<div></div><div></div><div></div>',
]);
