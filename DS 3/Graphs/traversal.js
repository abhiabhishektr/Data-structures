
// =========== BFS and DFS =============

class Graph {
    constructor() {
      this.vertices = [];
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.adjacencyList[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }
  
    bfs(startingVertex) {
      const visited = {};
      const queue = [];
      queue.push(startingVertex);
      visited[startingVertex] = true;
  
      while (queue.length) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
  
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
    }
  
    dfs(startingVertex) {
      const visited = {};
      this._dfsHelper(startingVertex, visited);
    }
  
    _dfsHelper(vertex, visited) {
      visited[vertex] = true;
      console.log(vertex);
  
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          this._dfsHelper(neighbor, visited);
        }
      });
    }
  }
  
  // Sample usage
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  
  console.log('BFS traversal:');
  graph.bfs('A');
  
  console.log('\nDFS traversal:');
  graph.dfs('A');
  