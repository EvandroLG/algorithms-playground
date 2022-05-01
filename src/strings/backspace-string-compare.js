/*
  Backspace String Compare

  Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
  Note that after backspacing an empty text, the text will continue empty.

  Example:
  Input: "ab##", "c#d#"
  Output: true
*/

function backspaceStringCompare(a, b) {
  const normalizedA = normalize(a);
  const normalizedB = normalize(b);

  return normalizedA === normalizedB;
}

function normalize(s) {
  const fragments = s.split('');

  return (function traverse(result) {
    const index = result.indexOf('#');

    if (index === -1) {
      return result.join('');
    }

    if (result === 0) {
      result.splice(index, 1);
    } else {
      result.splice(index - 1, 2);
    }

    return traverse(result);
  })(fragments);
}

const assert = require('assert');
assert.ok(backspaceStringCompare('ab##', 'c#d#'));
