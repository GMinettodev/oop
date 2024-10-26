const Node = require("./node");

class LinkedList {
  constructor() {
    this._count = 0;
    this._head = undefined;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this._head == null) {
      this._head = node;
    } else {
      current = this._head;
      while (current._next != null) {
        current = current._next;
      }
      current._next = node;
    }
    this._count++;
  }

  removeAt(index) {
    // verifica valores fora do intervalo
    if (index >= 0 && index < this._count) {
      let current = this._head;
      //remove o primeiro item
      if (index === 0) {
        this._head = current._next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current._next;
        }
        // faz a ligação de previous com o next de current: pula esse _elemento para removê-lo
        previous._next = current._next;
      }
      this._count--;
      return current._element;
    }
    return undefined;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this._count) {
      let node = this._head;
      for (let i = 0; i < index && node != null; i++) {
        node = node._next;
      }
      return node;
    }

    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this._count) {
      const node = new Node(element);
      if (index === 0) {
        // adiciona na primeira posição
        const current = this._head;
        node._next = current; // {2}
        this._head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous._next;
        node._next = current;
        previous._next = node;
      }
      // atualiza o tamanho da lista
      this._count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this._head;
    for (let i = 0; i < this._count && current != null; i++) {
      if (element === current._element) {
        return i;
      }
      current = current._next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this._count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this._head;
  }

  toString() {
    if (this._head == null) {
      return "";
    }

    let objString = "";
    let current = this._head;

    while (current != null) {
      objString += (objString.length ? ", " : "") + current._element;
      current = current._next;
    }

    return objString; // Return the constructed string
  }
}

module.exports = { LinkedList };
