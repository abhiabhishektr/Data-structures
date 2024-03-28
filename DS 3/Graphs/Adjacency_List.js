class Graph {
    constructor() {
      this.vertices = new Map();
    }
  
    addVertex(vertex) {
      if (!this.vertices.has(vertex)) {
        this.vertices.set(vertex, new Set());
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.vertices.get(vertex1).add(vertex2);
      this.vertices.get(vertex2).add(vertex1); // For undirected graph
    }
  
    printGraph() {
      for (let [vertex, edges] of this.vertices.entries()) {
        console.log(`${vertex} -> ${[...edges].join(', ')}`);
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('A', 'C');
  
  graph.printGraph();
  