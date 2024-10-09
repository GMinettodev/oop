class Queue {
  constructor() {
    // Inicializa o contador de elementos na fila e o índice do primeiro elemento.
    this._count = 0;
    this._first = 0;
    this._items = {};
  }

  // Adiciona um novo elemento à fila
  enqueue(element) {
    this._items[this._count] = element;
    this._count++;
  }

  // Remove e retorna o primeiro elemento da fila
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const element = this._items[this._first];
    delete this._items[this._first];
    this._first++;
    return element;
  }

  // Retorna o próximo elemento da fila sem removê-lo
  nextElement() {
    return this._items[this._first];
  }

  // Verifica se a fila está vazia
  isEmpty() {
    return this._count === this._first;
  }

  // Retorna o número de elementos na fila
  size() {
    return this._count - this._first;
  }

  // Limpa todos os elementos da fila
  clear() {
    this._items = {};
    this._count = 0;
    this._first = 0;
  }

  // Retorna uma representação em string da fila
  toString() {
    if (this.isEmpty()) {   
      return "";
    }
    let objString = `${this._items[this._first]}`;
    for (let i = this._first + 1; i < this._count; i++) {
      objString = `${objString},${this._items[i]}`;
    }
    return objString;
  }
}

module.exports = { Queue };
