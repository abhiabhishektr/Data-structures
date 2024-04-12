class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, new Set());
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.vertices.get(v1).add(v2);
    this.vertices.get(v2).add(v1); 
    // For undirected graph
  }

  printGraph() {
    for (let [vertex, edges] of this.vertices.entries()) {
      console.log(`${vertex} -> ${[...edges].join(', ')}`);
    }
  }

  bfs(startingVertex) {
    const visited = new Set();
    const queue = [startingVertex];
    visited.add(startingVertex);

    while (queue.length) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      const neighbors = this.vertices.get(currentVertex);
      for (let n of neighbors) {
        if (!visited.has(n)) {
          queue.push(n);
          visited.add(n);
        }
      }
    }
  }

  dfs(startingVertex) {
    const visited = new Set();
    this._dfsHelper(startingVertex, visited);
  }

  _dfsHelper(vertex, visited) {
    console.log(vertex);
    visited.add(vertex);

    const neighbors = this.vertices.get(vertex);
    for (let n of neighbors) {
      if (!visited.has(n)) {
        this._dfsHelper(n, visited);
      }
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('A', 'C');

console.log("\nBFS Traversal:");
graph.bfs('A');

console.log("\nDFS Traversal:");
graph.dfs('A');
