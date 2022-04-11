/*
  Seat Reservation Manager

  Design a system that manages the reservation state of n seats that are numbered from 1 to n.
  Implement the SeatManager class:
  - SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from 1 to n. All seats are initially available.
  - int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
  - void unreserve(int seatNumber) Unreserves the seat with the given seatNumber.
*/

function SeatManager(n) {
  if (n <= 0) {
    throw new Error();
  }

  this.nextAvailableSeat = 0;
  this.seats = new Array(n).fill(false);
}

SeatManager.prototype.reserve = function () {
  this.seats[this.nextAvailableSeat] = true;
  const idx = this.nextAvailableSeat + 1;

  while (this.seats[this.nextAvailableSeat]) {
    this.nextAvailableSeat++;
  }

  return idx;
};

SeatManager.prototype.unreserve = function (seatNumber) {
  if (seatNumber > this.seats.length || seatNumber <= 0) {
    throw new Error();
  }

  const idx = seatNumber - 1;
  this.seats[idx] = false;

  if (idx < this.nextAvailableSeat) {
    this.nextAvailableSeat = idx;
  }
};

const assert = require('assert');
const seatManager = new SeatManager(5);

assert.equal(seatManager.reserve(), 1);
assert.equal(seatManager.reserve(), 2);
seatManager.unreserve(2);
assert.equal(seatManager.reserve(), 2);
