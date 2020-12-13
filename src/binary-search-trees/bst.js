class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      this.left ? this.left.insert(value) : (this.left = new BST(value));
    } else {
      this.right ? this.right.insert(value) : (this.right = new BST(value));
    }

    return this;
  }

  contains(value) {
    if (value < this.value) {
      return this.left ? this.left.contains(value) : false;
    } else if (value > this.value) {
      return this.right ? this.right.contains(value) : false;
    } else {
      return true;
    }
  }
}

module.exports = BST;
