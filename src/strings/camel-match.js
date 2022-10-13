/*
  Camel Match

  Given an array of strings queries and a string pattern, return a boolean array answer where answer[i] is true if queries[i] matches pattern, and false otherwise.
  A query word queries[i] matches pattern if you can insert lowercase English letters pattern so that it equals the query.
  You may insert each character at any position and you may not insert any characters.

  Example:
  Input: ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FB"
  Output: [true,false,true,true,false]
*/

function camelMatch(queries, pattern) {
  const output = [];

  for (const query of queries) {
    output.push(strMatch(query, pattern));
  }

  return output;
}

function strMatch(query, pattern) {
  let p1 = 0;
  let p2 = 0;

  while (p1 < query.length) {
    if (query[p1] === pattern[p2]) {
      p1++;
      p2++;
    } else {
      if (isUpperCase(query[p1])) {
        return false;
      }

      p1++;
    }
  }

  if (p2 < pattern.length) {
    return false;
  }

  return true;
}

function isUpperCase(s) {
  const upper = s.toUpperCase();
  return upper === s;
}

const assert = require('assert');
assert.deepEqual(
  camelMatch(
    ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack'],
    'FB'
  ),
  [true, false, true, true, false]
);
