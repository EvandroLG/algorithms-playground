/*
  Buddy Strings

  Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
  Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

  Example:
  Input: "ab", "ba"
  Output: true
*/

function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  const counterC = counter(s);
  const counterGoal = counter(goal);

  if (!equal(counterC, counterGoal)) {
    return false;
  }

  let diff = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
  }

  if (diff.length === 0) {
    if (!Object.keys(counterC).some((key) => counterC[key] > 1)) {
      return false;
    }
  }

  if (diff.length === 1 || diff.length >= 3) {
    return false;
  }

  if (!swapAndCheck(diff, s, goal)) {
    return false;
  }

  return true;
}

function swapAndCheck(diff, a, b) {
  if (a[diff[0]] !== b[diff[1]]) {
    return false;
  }

  if (a[diff[1]] !== b[diff[0]]) {
    return false;
  }

  return true;
}

function equal(counterA, counterB) {
  const keysA = Object.keys(counterA);
  const keysB = Object.keys(counterB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const k of keysA) {
    if (keysA[k] !== keysB[k]) {
      return false;
    }
  }

  return true;
}

function counter(s) {
  return s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;
    return acc;
  }, {});
}

const assert = require('assert');
assert.ok(buddyStrings('ab', 'ba'));
