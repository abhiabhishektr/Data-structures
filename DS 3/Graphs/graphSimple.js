class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
        throw new Error('Both vertices must exist in the graph.');
      }
  
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1); // for undirected graph
    }
  
    printGraph() {
      for (let vertex in this.vertices) {
        console.log(vertex + ' -> ' + this.vertices[vertex].join(', '));
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('A', 'C');
  
  graph.printGraph();
  


  // class Graph {
  //   constructor() {
  //     this.vertices = new Map();
  //   }
  
  //   addVertex(vertex) {
  //     if (!this.vertices.has(vertex)) {
  //       this.vertices.set(vertex, new Set());
  //     }
  //   }
  
  //   addEdge(vertex1, vertex2) {
  //     if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
  //       throw new Error('Both vertices must exist in the graph.');
  //     }
  
  //     this.vertices.get(vertex1).add(vertex2);
  //     this.vertices.get(vertex2).add(vertex1); // for undirected graph
  //   }
  
  //   printGraph() {
  //     for (let [vertex, edges] of this.vertices.entries()) {
  //       console.log(`${vertex} -> ${[...edges].join(', ')}`);
  //     }
  //   }
  // }
  
  // // Example usage:
  // const graph = new Graph();
  // graph.addVertex('A');
  // graph.addVertex('B');
  // graph.addVertex('C');
  // graph.addEdge('A', 'B');
  // graph.addEdge('B', 'C');
  // graph.addEdge('A', 'C');
  
  // graph.printGraph();
  