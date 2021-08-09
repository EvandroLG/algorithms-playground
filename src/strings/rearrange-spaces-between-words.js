/*
  Rearrange Spaces Between Words

  You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.
  Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.
  Return the string after rearranging the spaces.
*/

function rearrangeSpacesBetweenWords(str) {
  const splitted = str.split(' ');
  const words = splitted.filter((word) => word !== '');
  const totalOfSpaces = splitted.length - 1;

  if (words.length === 1) {
    return words[0] + ' '.repeat(totalOfSpaces);
  }

  const totalOfSpacesBetweenWords = totalOfSpaces / (words.length - 1);
  const remainder = totalOfSpaces % (words.length - 1);

  return (
    words.join(' '.repeat(totalOfSpacesBetweenWords)) + ' '.repeat(remainder)
  );
}

const assert = require('assert');
assert.equal(
  rearrangeSpacesBetweenWords('  this   is  a sentence '),
  'this   is   a   sentence'
);
