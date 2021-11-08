const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

class PriorityQueue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap.length ? this.heap[0] : undefined;
  }

  add(element) {
    this.heap.push(element);

    if (this.heap.length) {
      this.moveUp(this.heap.length - 1);
    }
  }

  poll() {
    if (!this.heap.length) {
      return;
    }

    const value = this.heap[0];

    if (this.heap.length === 1) {
      this.heap.length = 0;
    } else {
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.length -= 1;

      if (this.heap.length > 1) {
        this.moveDown(0);
      }
    }

    return value;
  }

  moveDown(idx) {
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;
    const leftSwappable = !!this.compare(this.heap[idx], this.heap[left]);

    if (right >= this.heap.length) {
      if (leftSwappable) {
        swap(this.heap, idx, left);
      }

      return;
    }

    const rightSwappable = !!this.compare(this.heap[idx], this.heap[right]);

    if (leftSwappable && rightSwappable) {
      const comparison = this.compare(this.heap[left], this.heap[right]);

      if (comparison < 0) {
        swap(this.heap, idx, left);
        this.moveDown(left);
      } else {
        swap(this.heap, idx, right);
        this.moveDown(right);
      }
    } else {
      if (leftSwappable) {
        swap(this.heap, idx, left);
        this.moveDown(left);
      } else {
        swap(this.heap, idx, right);
        this.moveDown(right);
      }
    }
  }

  moveUp(idx) {
    const parent = Math.floor((idx - 1) / 2);

    if (this.compare(this.heap[parent], this.heap[idx])) {
      swap(this.heap, idx, parent);
      this.moveUp(parent);
    }
  }
}

module.exports = PriorityQueue;
