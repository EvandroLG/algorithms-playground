/*
  Suggested Products

  You are given an array of strings products and a string searchWord.
  Design a system that suggests at most three product names from products after each character of searchWord is typed.
  Suggested products should have common prefix with searchWord.
  If there are more than three products with a common prefix return the three lexicographically minimums products.
  Return a list of lists of the suggested products after each character of searchWord is typed.

  Example:
  Input: ["mobile","mouse","moneypot","monitor","mousepad"], "mouse"
  Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
*/

function suggestedProducts(products, searchWord) {
  const output = [];
  products.sort((a, b) => a.localeCompare(b));

  for (let i = 1; i <= searchWord.length; i++) {
    const sub = searchWord.slice(0, i);
    const foundProducts = findProducts(products, sub);
    output.push(foundProducts);
  }

  return output;
}

function findProducts(products, s) {
  const result = [];

  for (const product of products) {
    if (product.startsWith(s)) {
      result.push(product);

      if (result.length === 3) {
        break;
      }
    }
  }

  return result;
}

const assert = require('assert');
assert.deepStrictEqual(
  suggestedProducts(
    ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
    'mouse'
  ),
  [
    ['mobile', 'moneypot', 'monitor'],
    ['mobile', 'moneypot', 'monitor'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
  ]
);
