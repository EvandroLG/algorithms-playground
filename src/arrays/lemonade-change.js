/*
  Lemonade Change

  At a lemonade stand, each lemonade costs $5.
  Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills).
  Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
  You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

  Example:
  Input: [5,5,5,10,20]
  Output: true
*/

function lemonadeChange(bills) {
  let tens = 0;
  let fives = 0;

  for (const bill of bills) {
    if (bill === 5) {
      fives++;
    } else if (bill === 10) {
      if (!fives) {
        return false;
      }

      fives--;
      tens++;
    } else {
      if (fives >= 1 && tens >= 1) {
        fives--;
        tens--;
      } else if (fives >= 3) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(lemonadeChange([5, 5, 5, 10, 20]));
