/*
  Reorder Data In Log Files

  You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

  There are two types of logs:
  - Letter-logs: All words (except the identifier) consist of lowercase English letters.
  - Digit-logs: All words (except the identifier) consist of digits.

  Reorder these logs so that:
  1. The letter-logs come before all digit-logs.
  2. The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
  3. The digit-logs maintain their relative ordering.
  4. Return the final order of the logs.

  Example 1:
  Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
  Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
*/

function getContent(value) {
  const splitted = value.split(' ');
  const identifier = splitted[0];
  const content = splitted.slice(1).join(' ');

  return {
    identifier,
    content,
  };
}

function isDigit(value) {
  return /^\d+$/.test(value);
}

function handleSort(a, b) {
  const { identifier: identifierA, content: contentA } = getContent(a);
  const { identifier: identifierB, content: contentB } = getContent(b);

  const isDigitA = isDigit(contentA[0]);
  const isDigitB = isDigit(contentB[0]);

  if (!isDigitA && !isDigitB) {
    const compare = contentA.localeCompare(contentB);

    if (compare !== 0) {
      return compare;
    }

    return identifierA.localeCompare(identifierB);
  }

  if (!isDigitA && isDigitB) {
    return -1;
  }

  if (!isDigitB && isDigitA) {
    return 1;
  }

  return 0;
}

function reorderDataInLogFiles(logs) {
  const copy = logs.slice();
  copy.sort(handleSort);

  return copy;
}

const assert = require('assert');

const logs = [
  'dig1 8 1 5 1',
  'let1 art can',
  'dig2 3 6',
  'let2 own kit dig',
  'let3 art zero',
];

assert.deepEqual(reorderDataInLogFiles(logs), [
  'let1 art can',
  'let3 art zero',
  'let2 own kit dig',
  'dig1 8 1 5 1',
  'dig2 3 6',
]);
