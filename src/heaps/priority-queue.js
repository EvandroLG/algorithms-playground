const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

class PriorityQueue {
  constructor(compare) {
    this.compare = (a, b) => compare(a, b) > 0;
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(element) {
    this.heap.push(element);

    if (this.heap.length > 1) {
      this.moveUp(this.heap.length - 1);
    }
  }

  poll() {
    if (this.heap.length <= 1) {
      return this.hep.pop();
    }

    swap(0, this.heap.length - 1);
    const removed = this.heap.pop();

    if (this.heap.length > 1) {
      this.moveDown(0);
    }

    return removed;
  }

  moveDown(index) {
    if (index >= this.heap.length - 1) return;

    const child = this.getChild(index);
    if (!child) return;

    if (this.compare(this.heap[index], this.heap[child])) {
      swap(index, child);
      this.moveDown(child);
    }
  }

  getChild(index) {
    let left = index * 2 + 1;
    if (left >= this.heap.length) left = null;

    let right = index * 2 + 2;
    if (right >= this.heap.length) right = null;

    if (left && right) {
      return this.compare(this.heap[left], this.heap[right]) ? right : left;
    }

    if (right) {
      return right;
    }

    if (left) {
      return left;
    }
  }

  moveUp(index) {
    if (index === 0) {
      return;
    }

    const parent = Math.floor(index / 2);
    if (this.compare(this.heap[parent], this.heap[index])) {
      swap(parent, index);
      this.moveUp(parent);
    }
  }
}

module.exports = PriorityQueue;
