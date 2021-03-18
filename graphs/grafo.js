
/**
   2 - 0
  / \
  1 - 3
*/

// Edge List - Representa las conexiones que hay en el grafo
const graph = [
  [0,2],
  [2,3],
  [2,1],
  [1,3]
];

// Adjacent List - Cada node seria un indice y se representa en un array con los valores con los que 
// interconecta
//               0     1       2       3
const graph = [ [2], [2,3], [0,1,3], [1,2]  ]

// Adjacent List como hastable
const graph = {
  0: [2],
  1: [2,3],
  2: [0,1,3],
  3: [1,2]
}

// Adjacent Matrix - Graph ponderados 
// Esta se comporta de manera binario estamos formando el array de acuerdo a su indice
// y metiendo un array de todos los indice del grafo, seran 1 los que se interconecten
// y cero los que no
const graph = [
  [0,0,1,0], // el indice 0 (el grafo 0) se conecta con el indice 2 (grafo 2) de este array
  [0,0,1,1],
  [1,1,0,1], // el indice 2 (el grafo 2) se conecta con el indice 0, 1, 3 (grafo 0,1,3) de este array
  [0,1,1,0]
]

const graph = {
  0: [0,0,1,0], // el indice 0 (el grafo 0) se conecta con el indice 2 (grafo 2) de este array
  1: [0,0,1,1],
  2: [1,1,0,1], // el indice 2 (el grafo 2) se conecta con el indice 0, 1, 3 (grafo 0,1,3) de este array
  3: [0,1,1,0]
}