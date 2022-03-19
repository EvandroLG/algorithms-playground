/*
  Goal Parser Interpretation

  You own a Goal Parser that can interpret a string command.
  The command consists of an alphabet of "G", "()" and/or "(al)" in some order.
  The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al".
  The interpreted strings are then concatenated in the original order.
  Given the string command, return the Goal Parser's interpretation of command.

  Example:
  Input: "G()()()()(al)"
  Output: "Gooooal"
*/

function goalParserInterpretation(s) {
  const output = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === 'G') {
      output.push('G');
    } else {
      if (s[i + 1] === ')') {
        output.push('o');
        i++;
      } else {
        output.push('al');
        i += 3;
      }
    }
  }

  return output.join('');
}

const assert = require('assert');
assert.equal(goalParserInterpretation('G()()()()(al)'), 'Gooooal');
