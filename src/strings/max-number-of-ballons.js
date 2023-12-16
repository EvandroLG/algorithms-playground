/*
  Max Number Of Ballons

  Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
  You can use each character in text at most once. Return the maximum number of instances that can be formed.

  Example:
  Input: 'loonbalxballpoon'
  Output: 2
*/

function maxNumberOfBallons(text) {
  const map = buildCounter(text);
  const s = ['b', 'a', 'l', 'l', 'o', 'o', 'n'];
  let shouldContinue = true;
  let counter = 0;

  while (shouldContinue) {
    for (const c of s) {
      if (!map[c]) {
        shouldContinue = false;
        break;
      }

      map[c]--;
    }

    if (!shouldContinue) {
      break;
    }

    counter++;
  }

  return counter;
}

function buildCounter(s) {
  const map = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };

  for (const c of s) {
    if (map.hasOwnProperty(c)) {
      map[c]++;
    }
  }

  return map;
}

const assert = require('assert');
assert.equal(maxNumberOfBallons('loonbalxballpoon'), 2);
