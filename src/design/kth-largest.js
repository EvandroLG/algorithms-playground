/*
  Kth Largest

  Design a class to find the kth largest element in a stream.
  Note that it is the kth largest element in the sorted order, not the kth distinct element.
  Implement KthLargest class:
  - KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
  - int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
*/

function KthLargest(k, nums) {
  this.arr = nums.slice();
  this.k = k;
}

KthLargest.prototype.add = function (val) {
  this.arr.push(val);
  this.arr.sort((a, b) => a - b);

  return this.arr[this.arr.length - this.k];
};

const assert = require('assert');
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
assert.equal(kthLargest.add(3), 4);
assert.equal(kthLargest.add(5), 5);
