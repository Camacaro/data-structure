
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MySinglyLinkedList {

  constructor(value) {
    // creamos el inicio de nuestro SinglyLinkedList
    this.head = {
      value,
      next: null,
      prev: null,
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

  //insertar al final
	//Esto funciona ya que en el contructor hay una referencia
	//cambiamos UNA PROPIEDAD del tail entonces también cambia en el head
  append(value) {
    // aquí estamos creando un nuevo nodo
    const newNodo = new Node(value);

    // NUEVO
    newNodo.prev = this.tail;

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

}

let mySinglyLinkedList = new MySinglyLinkedList(1);