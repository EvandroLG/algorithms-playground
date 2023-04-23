/*
  Table Speller

  Check  if an input word can be "spelled" (case-insensitive) by a sequence of the chemical symbol abbreviations from the standard periodic table.
  For example, the word "accept" can be spelled with Ac (Actinium) + Ce (Cerium) + Pt (Platinum).
  The goal of this tool is to check if an input word can be "spelled" with the periodic table symbols, and then to show that sequence of element symbols.

  Example:
  Input: 'Because'
  Output: ['Be', 'Ca', 'U', 'Se']
*/

function tableSpeller(word, elements) {
  const elementsWithOne = elements.filter(
    (element) => element.symbol.length === 1
  );
  const elementsWithTwo = elements.filter(
    (element) => element.symbol.length === 2
  );
  const output = [];

  for (let i = 0; i < word.length; i++) {
    let found = false;

    const s = word.slice(i, i + 2);

    for (const element of elementsWithTwo) {
      if (equal(element.symbol, s)) {
        output.push(element.symbol);
        i++;
        found = true;
        break;
      }
    }

    if (found) {
      continue;
    }

    for (const element of elementsWithOne) {
      if (equal(element.symbol, word[i])) {
        output.push(element.symbol);
        found = true;
        break;
      }
    }

    if (found) {
      continue;
    }

    return [];
  }

  return output;
}

function equal(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

const assert = require('assert');

const elements = [
  {
    name: 'Neon',
    number: 10,
    symbol: 'Ne',
  },
  {
    name: 'Actinium',
    number: 89,
    symbol: 'Ac',
  },
  {
    name: 'Cerium',
    number: 58,
    symbol: 'Ce',
  },
  {
    name: 'Cesium',
    number: 55,
    symbol: 'Cs',
  },
  {
    name: 'Platinum',
    number: 78,
    symbol: 'Pt',
  },
];

assert.deepEqual(tableSpeller('accept', elements), ['Ac', 'Ce', 'Pt']);
