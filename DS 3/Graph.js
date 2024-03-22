//==========Basic Graph Operations=======
class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.adjList = new Array(vertices).fill(null).map(() => []);
    }

    addEdge(u, v) {
        this.adjList[u].push(v);
        this.adjList[v].push(u);
    }

    printAdjList() {
        for (let i = 0; i < this.V; i++) {
            console.log(`Vertex ${i}: ${this.adjList[i].join("->")}`);
        }
    }
}

// Sample usage
let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 4);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.printAdjList();
