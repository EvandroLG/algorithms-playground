/*
  Design Hit Counter

  Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds).
  Your system should accept a timestamp parameter (in seconds granularity), and you may assume that calls are being made to the system in chronological order (i.e., timestamp is monotonically increasing).
  Several hits may arrive roughly at the same time.

*/

function HitCounter() {
  this.queue = [];
}

HitCounter.prototype.hit = function (timestamp) {
  this.queue.push(timestamp);
};

HitCounter.prototype.getHits = function (timestamp) {
  while (this.queue.length) {
    const diff = timestamp - this.queue[0];

    if (diff >= 300) {
      this.queue.shift();
    } else {
      break;
    }
  }

  return this.queue.length;
};

const assert = require('assert');

const counter = new HitCounter();
counter.hit(1);
counter.hit(2);
counter.hit(3);

assert.equal(counter.getHits(4), 3);

counter.hit(300);
assert.equal(counter.getHits(300), 4);
assert.equal(counter.getHits(301), 3);
