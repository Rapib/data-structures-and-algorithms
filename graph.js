'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {

  constructor() {
    this.adjList = new Map();
  }

  addNode(val) {
    let node = new Vertex(val);
    this.adjList.set(node, []);
    return node;
  }

  addEdge(startNode, endNode, weight = 0) {
    if (this.adjList.has(startNode) && this.adjList.has(endNode)) {
      let edge = new Edge(endNode, weight);
      this.adjList.get(startNode).push(edge);
    } else {
      return 'error';
    }
  }

  getNodes() {
    return [...this.adjList.keys()];
  }

  getNeighbors(node) {
    // Returns a collection of edges connected to the given node
    // Include the weight of the connection in the returned collection
    // Empty collection returned if there are no nodes
    return this.adjList.get(node);
  }

  size() {
    // Returns the total number of nodes in the graph
    // 0 if there are none
    return this.adjList.size;
  }
}

module.exports = { Graph };
