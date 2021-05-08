/*
  Sum

  Given two non-negative integers, x and y represented as string, return the sum of x and y as a string.

  Example 1:
  Input: num1 = "11", num2 = "123"
  Output: "134"

  Example 2:
  Input: num1 = "456", num2 = "77"
  Output: "533"

  Example 3:
  Input: num1 = "0", num2 = "0"
  Output: "0"
*/

function sum(a, b) {
  let hasRest = false;
  const splittedA = a.split('');
  const splittedB = b.split('');
  const result = [];

  while (splittedA.length || splittedB.length) {
    const lastA = splittedA.pop();
    const lastB = splittedB.pop();
    const numA = Number(lastA ? lastA : 0);
    const numB = Number(lastB ? lastB : 0);
    const sum = numA + numB + +hasRest;
    const sumStr = '' + sum;

    if (sumStr.length === 2) {
      result.push(sumStr[1]);
      hasRest = true;
    } else {
      result.push(sumStr);
      hasRest = false;
    }
  }

  return hasRest ? '1' + result.reverse().join('') : result.reverse().join('');
}

const assert = require('assert');
assert.ok(sum('456', '77'));
