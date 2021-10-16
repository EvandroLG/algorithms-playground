/*
  Excel Sheet Column Number

  Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

  Example 1:
  Input: "A"
  Output: 1

  Example 2:
  Input: "ZY"
  Output: 701
*/

function excelSheetColumnNumber(title) {
  return title.split('').reduce((acc, c) => {
    acc *= 26;
    acc += c.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    return acc;
  }, 0);
}

const assert = require('assert');
assert.equal(excelSheetColumnNumber('ZY'), 701);
