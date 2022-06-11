/*
  Evaluate Brackets Pairs

  You are given a string s that contains some bracket pairs, with each pair containing a non-empty key.
  For example, in the string "(name)is(age)yearsold", there are two bracket pairs that contain the keys "name" and "age".
  When you evaluate a bracket pair that contains some key keyi, you will:
  - Replace keyi and the bracket pair with the key's corresponding valuei.
  - If you do not know the value of the key, you will replace keyi and the bracket pair with a question mark "?" (without the quotation marks).

  Example:
  Input: "(name)is(age)yearsold", [["name","bob"],["age","two"]]
  Output: "bobistwoyearsold"
*/

function evaluateBracketsPairs(s, knowledge) {
  const words = normalize(knowledge);
  const output = [];
  const word = [];
  let shouldStart = false;

  for (const c of s) {
    if (c === '(') {
      shouldStart = true;
      continue;
    }

    if (c === ')') {
      shouldStart = false;
      const key = word.join('');
      output.push(words.hasOwnProperty(key) ? words[key] : '?');
      word.length = 0;
      continue;
    }

    if (shouldStart) {
      word.push(c);
    } else {
      output.push(c);
    }
  }

  return output.join('');
}

function normalize(knowledge) {
  return knowledge.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
}

const assert = require('assert');
assert.deepEqual(
  evaluateBracketsPairs('(name)is(age)yearsold', [
    ['name', 'bob'],
    ['age', 'two'],
  ]),
  'bobistwoyearsold'
);
