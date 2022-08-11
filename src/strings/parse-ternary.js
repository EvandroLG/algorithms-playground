/*
  Parse Ternary

  Given a string expression representing arbitrarily nested ternary expressions, evaluate the expression, and return the result of it.
  You can always assume that the given expression is valid and only contains digits, '?', ':', 'T', and 'F' where 'T' is true and 'F' is false.
  All the numbers in the expression are one-digit numbers (i.e., in the range [0, 9]).
  The conditional expressions group right-to-left (as usual in most languages), and the result of the expression will always evaluate to either a digit, 'T' or 'F'.

  Examples:
  Input: "F?1:T?4:5"
  Output: '4'
*/

function parseTernary(expression) {
  if (expression.at(0) === 'T') {
    if (expression.at(3) === '?') {
      return parseTernary(expression.slice(2));
    }

    return expression.at(2);
  }

  const index = findIndex(expression);

  if (/\d/.test(expression.at(index)) || index === expression.length - 1) {
    return expression.at(index);
  }

  return parseTernary(expression.slice(index));
}

function findIndex(expression) {
  let counter = 0;

  for (let i = 0; i < expression.length; i++) {
    const c = expression[i];

    if (c === '?') {
      counter++;
    } else if (c === ':') {
      counter--;

      if (!counter) {
        return i + 1;
      }
    }
  }

  return expression.length;
}

const assert = require('assert');
assert.equal(parseTernary('F?1:T?4:5'), '4');
