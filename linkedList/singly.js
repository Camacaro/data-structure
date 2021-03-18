
// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {

  constructor(value) {
    // creamos el inicio de nuestro SinglyLinkedList
    this.head = {
      value,
      next: null
    }

    // Aqui sucede la magia ✨
    // Todo lo que modifiquemos en los atributos de tail
    // se modificará en la estructura inicial
    // por la RERENCIA!

    //tail y head apuntan a la misma direccion de memoria
		//y si cambia UNA PROPIEDAD de uno, cambiará en el otro
    this.tail = this.head;

    this.length = 1;
  }

  prepend(value) {
    
    const newNodo = new Node(value);

    newNodo.next = this.head

    this.head = newNodo

    this.length++;

    return this;
  }

  //insertar al final
	//Esto funciona ya que en el contructor hay una referencia
	//cambiamos UNA PROPIEDAD del tail entonces también cambia en el head
  append(value) {
    // aquí estamos creando un nuevo nodo
    const newNodo = new Node(value);

    // Como mencionamos anteriormente
    // si modificamos la cola por la REFERENCIA
    // se modificará la estructura inicial! 🖊

    //creamos nueva referencia
    this.tail.next = newNodo; //el next del head y el next del tail es el mismo
    // Pero aun tail sigue apuntando a la CABEZA
    // de la estructura inicial entonces es momento
    // de apuntar al nuevo nodo creado para que posteriormente
    // podamos agregar más nodos! 🚀
    this.tail = newNodo //tail y el next de head tienen la misma referencia
    // Finalmente aumentamos el tamaño definido de
    // nuestra estructura 👨‍🔧
    this.length++;
    
    return this;
    /*
		Entonces ahora tail y ese nodo que se agregó
		el next del head es el next de ese nodo que se agregó
		Ambos next estan referenciados, COMO AL INICIO
		entonces cuando creemos otro nodo simplemente se repetirá el proceso
		*/
  }

  insert(index, value) {

    // A -> B -> C

    // Encontrar el indice previo B (first pointer)

    // A -> B -> X -> C

    if( index >= this.length ) {
      return this.append(value);
    }

    const newNodo = new Node(value)
    // -1 porque lo voy a poner en C pero necesito el B para colocarlo en el next
    // y C colocarlo en el nex de X
    const firstPointer = this.getTheIndex(index - 1); 

    const holdingPointer = firstPointer.next;
    firstPointer.next = newNodo;
    newNodo.next = holdingPointer

    this.length++;

    return this;
  }

  getTheIndex(index){
    let counter = 0;
    let currentNode = this.head;

    while( counter !== index ) {

      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }


}

let mySinglyLinkedList = new MySinglyLinkedList(1);