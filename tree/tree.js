//      10
//   4     20
// 2  8 17  170

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNodo = new Node(value);
    
    if( this.root === null ) {
      
      this.root = newNodo;

    } else {

      let currentNode = this.root;

      while(true) {
        // Me voy a la izquierda
        if( value < currentNode.value ) {
          // Si no existe un nodo izquierdo, lo asigno
          if( !currentNode.left ) {
            currentNode.left = newNodo;
            return this;
          }

          // si existe un nodo izquierdo el currentNode toma su valor y vuelvo hacer el ciclo
          // esto es para asignar el valor del left en el nodo correspondiente
          currentNode = currentNode.left;

        } else {

          if( !currentNode.right ) {
            currentNode.right = newNodo;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  //      10
  //   4     20
  // 2  8 17  170


  search(value) {

    if( this.root === null ){
      throw new Error('No Hay valores en el nodo')
    }

    let currentNode = this.root;

    while(true) {

      if( value === currentNode.value ) {
        return currentNode;
      }


      if( value < currentNode.value ) {

        if( !currentNode.left ) {
          throw new Error('No Hay valores en el nodo Izquierdo')
        }

        currentNode = currentNode.left;

      } else {

        if( !currentNode.right ) {
          throw new Error('No Hay valores en el nodo Derecho')
        }

        currentNode = currentNode.right;
      }
    }
  }
}

const tree = new BinarySearchTree();