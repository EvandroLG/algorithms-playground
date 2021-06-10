class ArrayList {
  constructor() {
    this.length = 0;
    this.items = {};
  }

  get(index) {
    if (this.items.hasOwnProperty(index)) {
      return this.items[index];
    }
  }

  push(value) {
    this.items[this.length++] = value;
  }

  pop() {
    if (this.length === 0) {
      return;
    }

    const value = this.items[--this.length];
    delete this.items[this.length];

    return value;
  }

  remove(index) {
    if (index >= this.length || index < 0) {
      return;
    }

    if (index === this.length - 1) {
      delete this.items[index];
      return;
    }

    const currentIndex = index; // 1
    while (this.items.hasOwnProperty(currentIndex + 1)) {
      this.items[currentIndex] = this.items[++currentIndex];
    }

    delete this.items[this.length - 1];

    this.length--;
  }
}
