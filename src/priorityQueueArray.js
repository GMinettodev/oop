class Queue {
  constructor() {
    this._items = [];
  }

  enqueue(element, isPriority = false) {
    if (isPriority) {
      this._items.splice(this._getPriorityInsertIndex(), 0, element);
    } else {
      this._items.push(element);
    }
  }

  _getPriorityInsertIndex() {
    for (let i = 0; i < this._items.length; i++) {
      if (!this._items[i].isPriority) {
        return i;
      }
    }
    return this._items.length;
  }

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
