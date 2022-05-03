/*
  Logger Rate Limiter

  Design a logger system that receives a stream of messages along with their timestamps.
  Each unique message should only be printed at most every 10 seconds.
  All messages will come in chronological order.
  Several messages may arrive at the same timestamp.
  Implement the Logger class:
  - Logger() Initializes the logger object.
  - bool shouldPrintMessage(int timestamp, string message) Returns true if the message should be printed in the given timestamp, otherwise returns false.
*/

function Logger() {
  this.messages = {};
}

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (!this.messages.hasOwnProperty(message)) {
    this.messages[message] = timestamp;
    return true;
  }

  const shouldPrint = timestamp - this.messages[message] >= 10;

  if (shouldPrint) {
    this.messages[message] = timestamp;
    return true;
  }

  return false;
};

const assert = require('assert');
const logger = new Logger();
assert.ok(logger.shouldPrintMessage(1, 'foo'));
assert.ok(logger.shouldPrintMessage(2, 'bar'));
assert.ok(!logger.shouldPrintMessage(3, 'foo'));
assert.ok(!logger.shouldPrintMessage(8, 'bar'));
assert.ok(!logger.shouldPrintMessage(10, 'foo'));
assert.ok(logger.shouldPrintMessage(11, 'foo'));
