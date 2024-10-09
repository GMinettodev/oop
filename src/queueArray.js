class Queue {
  constructor() {
    this._items = [];
  }
  // Adiciona elementos na fila
  enqueue(element) {
    this._items.push(element);
  }

  // Retira elementos da fila
  dequeue() {
    return this._items.shift();
  }

  nextElement() {
    return this._items[0];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }

  clear() {
    this._items = [];
  }
}

module.exports = { Queue };
