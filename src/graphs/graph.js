class Node {
  constructor(value) {
    this.value = value;
    this.edges = new Set();
  }

  connect(node) {
    this.edges.add(node);
    node.edges.add(this);
  }

  isConnected(node) {
    return this.edges.has(node);
  }
}

class Graph {
  constructor(...nodes) {
    this.nodes = new Set(nodes);
  }

  add(node) {
    this.nodes.add(node);
  }
}

module.exports = {
  Node,
  Graph,
};
