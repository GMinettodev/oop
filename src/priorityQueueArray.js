class Queue {
  constructor() {
    this._items = [];
  }

  // Adiciona elementos na fila
  enqueue(element, isPriority = false) {
    if (isPriority) {
      // Se o elemento é prioritário, adiciona-o antes dos outros elementos
      // Encontra a posição correta para inserir o prioritário
      let index = this._items.findIndex((item) => !item.isPriority);
      if (index === -1) {
        // Se não há elementos não prioritários, empilha no final
        this._items.push({ element, isPriority: true });
      } else {
        // Insere o prioritário na posição correta
        this._items.splice(index, 0, { element, isPriority: true });
      }
    } else {
      // Para elementos não prioritários, adiciona ao final da fila
      this._items.push({ element, isPriority: false });
    }
  }

  // Retira elementos da fila
  dequeue() {
    if (this.isEmpty()) {
      return null; // Retorna null se a fila estiver vazia
    }
    return this._items.shift().element; // Retorna o elemento sem o marcador isPriority
  }

  // Retorna o próximo elemento na fila
  nextElement() {
    if (this.isEmpty()) {
      return null; // Retorna null se a fila estiver vazia
    }
    return this._items[0].element; // Retorna o elemento sem o marcador
  }

  // Retorna verdadeiro se a fila estiver vazia
  isEmpty() {
    return this._items.length === 0;
  }

  // Retorna o tamanho da fila
  size() {
    return this._items.length;
  }

  // Redefine a fila
  clear() {
    this._items = [];
  }
}

module.exports = { Queue };
