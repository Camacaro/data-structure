// Graph no dirigidos, con el adjancent List Json

class Graph {
  constructor() {
    this.nodes = 0; // vertices
    this.adjacentList = {};
  }
  // Agregar nodo que se llaman vertices
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  // Agregar la conexion con los otros nodes los bordes
  addEdge(node1, node2) {
    // No dirigidos, tiene que tener ambas conexiones
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph()

// Vértices - Nodes
Graph.addVertice('1');
Graph.addVertice('3');
Graph.addVertice('4');
Graph.addVertice('5');
Graph.addVertice('6');
Graph.addVertice('8');

// Conexiones
Graph.addConex(8,4)
Graph.addConex(4,1)
Graph.addConex(1,3)
Graph.addConex(1,6)
Graph.addConex(3,6)
Graph.addConex(3,5)
Graph.addConex(5,4)

/**
    // RESULTADO:
    1: (3) [4, 3, 6]
    3: (3) [1, 6, 5]
    4: (3) [8, 1, 5]
    5: (2) [3, 4]
    6: (2) [1, 3]
    8: [4] 
 */