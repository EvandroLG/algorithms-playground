/*
  Flat Object

  Wrte a function to flatten a json object with nested keys into a single level.

  Example:
  Input:
  {
    "Germany": {
      "Munich": ["Gilson", "Gabriel"],
      "Berlin": ["Guilherme", "Demetrius"]
    },
    "Brazil": {
      "Rio": "Everton"
    },
    "Ireland": {
      "Dublin": ["Fabio", "Jonas", "Diego"]
    }
  }

  Output:
  {
    "Germany_Munich_0": "Gilson",
    "Germany_Munich_1": "Gabriel",
    "Germany_Berlin_0": "Guilherme",
    "Germany_Berlin_1": "Demetrius",
    "Brazil_Rio": "Everton",
    "Ireland_Dublin_0": "Fabio",
    "Ireland_Dublin_1": "Jonas",
    "Ireland_Dublin_2": "Diego",
  }
*/

function flatObject(json) {
  const output = {};

  (function flatHelper(obj, normalizedKey = '') {
    if (Array.isArray(obj)) {
      obj.forEach((item, idx) => {
        flatHelper(item, `${normalizedKey}${idx}_`);
      });
    } else if (typeof obj === 'object') {
      const keys = Object.keys(obj);
      keys.forEach((key) => {
        flatHelper(obj[key], `${normalizedKey}${key}_`);
      });
    } else {
      output[normalizedKey.slice(0, -1)] = obj;
    }
  })(json);

  return output;
}

const assert = require('assert');
const json = {
  Germany: {
    Munich: ['Gilson', 'Gabriel'],
    Berlin: ['Guilherme', 'Demetrius'],
  },
  Brazil: {
    Rio: 'Everton',
  },
  Ireland: {
    Dublin: ['Fabio', 'Jonas', 'Diego'],
  },
};

assert.deepEqual(flatObject(json), {
  Germany_Munich_0: 'Gilson',
  Germany_Munich_1: 'Gabriel',
  Germany_Berlin_0: 'Guilherme',
  Germany_Berlin_1: 'Demetrius',
  Brazil_Rio: 'Everton',
  Ireland_Dublin_0: 'Fabio',
  Ireland_Dublin_1: 'Jonas',
  Ireland_Dublin_2: 'Diego',
});
