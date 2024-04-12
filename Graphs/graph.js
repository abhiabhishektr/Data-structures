class Graph {
    constructor() {
      this.vertices = [];
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.vertices.includes(vertex)) {
        this.vertices.push(vertex);
        this.adjacencyList[vertex] = [];
      } else {
        console.log("Vertex already exists.");
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.vertices.includes(vertex1) || !this.vertices.includes(vertex2)) {
        console.log("One or both vertices do not exist.");
      } else {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
      }
    }
  
    printGraph() {
      console.log("Vertices:");
      console.log(this.vertices);
      console.log("Edges:");
      for (const vertex in this.adjacencyList) {
        console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
      }
    }
  }
  
  // Example usage:
  const myGraph = new Graph();
  
  // Adding vertices
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  myGraph.addVertex('D');
  myGraph.addVertex('E');
  
  // Adding edges
  myGraph.addEdge('A', 'B');
  myGraph.addEdge('A', 'C');
  myGraph.addEdge('B', 'D');
  myGraph.addEdge('C', 'E');
  
  // Printing the graph
  myGraph.printGraph();
  

    //         A
    //        / \
    //       /   \
    //      B     C
    //      |     |
    //      D     E
