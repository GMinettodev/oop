class Stack {
  // Cria um array
  constructor() {
    this._items = [];
  }

  // Insere um elemento no array
  push(element) {
    this._items.push(element);
  }

  // Retira o último elemento inserido no array
  pop() {
    return this._items.pop();
  }

  // Retorna o último elemento inserido no array
  peek() {
    return this._items[this._items.length - 1];
  }

  // Retorna verdadeiro se o array estiver vazio
  isEmpty() {
    return this._items.length === 0;
  }

  // Retorna o tamanho do array
  size() {
    return this._items.length;
  }

  // Limpa o array
  clear() {
    this._items = [];
  }
}

module.exports = { Stack };
