
class Graph {
    constructor(len) {
      this.len = len;
      this.adjMatrix = Array.from({ length: len }, () => Array(len).fill(0));
    }
  
    addEdge(v1, v2) {
      this.adjMatrix[v1][v2] = 1;
      this.adjMatrix[v2][v1] = 1; // For undirected graph
    }
  
    printGraph() {
      for (let i = 0; i < this.len; i++) {
        console.log(`${String.fromCharCode(65 + i)} -> ${this.adjMatrix[i].map((val, index) => val === 1 ? String.fromCharCode(65 + index) : '').filter(val => val !== '').join(', ')}`);
      }
    }
  
    dfs(startVertex, visited = new Array(this.len).fill(false)) {
      console.log(String.fromCharCode(65 + startVertex));
      visited[startVertex] = true;
  
      for (let i = 0; i < this.len; i++) {
        if (this.adjMatrix[startVertex][i] === 1 && !visited[i]) {
          this.dfs(i, visited);
        }
      }
    }
  
    bfs(startVertex) {
      const visited = new Array(this.len).fill(false);
      const queue = [startVertex];
  
      while (queue.length !== 0) {
        const currentVertex = queue.shift();
        if (!visited[currentVertex]) {
          console.log(String.fromCharCode(65 + currentVertex));
          visited[currentVertex] = true;
          for (let i = 0; i < this.len; i++) {
            if (this.adjMatrix[currentVertex][i] === 1 && !visited[i]) {
              queue.push(i);
            }
          }
        }
      }
    }
  }
  
  const graph = new Graph(6); // Assuming 6 vertices
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 3);
  graph.addEdge(1, 4);
  graph.addEdge(2, 5);
  
  console.log("DFS Traversal:");
  graph.dfs(0);
  
  console.log("BFS Traversal:");
  graph.bfs(0);
  