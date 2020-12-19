class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setNode(value) {
    return {
      value,
      next: null,
    };
  }

  setHead(value) {
    const node = this.setNode(value);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.tail = node;
    }

    this.head = node;
  }

  setTail(value) {
    const node = this.setNode(value);

    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }
}

module.exports = SinglyLinkedList;
