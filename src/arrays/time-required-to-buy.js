/*
  Time Required To Buy

  There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.
  You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].
  Each person takes exactly 1 second to buy a ticket.
  A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.
  Return the time taken for the person at position k (0-indexed) to finish buying tickets.

  Example:
  Input: [2,3,2], 2
  Output: 6
*/

function timeRequiredToBuy(tickets, k) {
  let result = 0;
  let i = 0;

  while (true) {
    if (tickets[i]) {
      tickets[i]--;
      result++;

      if (i === k && tickets[i] === 0) {
        break;
      }
    }

    if (i === tickets.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }

  return result;
}

const assert = require('assert');
assert.strictEqual(timeRequiredToBuy([2, 3, 2], 2), 6);
