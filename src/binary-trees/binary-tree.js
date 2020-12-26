class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const queue = [];
    queue.push(this);

    while (true) {
      const node = queue.pop();

      if (node.left === null) {
        node.left = new BinaryTree(value);
        return;
      } else {
        queue.unshift(node.left);
      }

      if (node.right === null) {
        node.right = new BinaryTree(value);
        return;
      } else {
        queue.unshift(node.right);
      }
    }
  }
}
