const { Queue } = require("../src/priorityQueueArray");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("deve inicializar uma fila vazia", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test("deve adicionar elementos à fila", () => {
    queue.enqueue("A");
    queue.enqueue("B");

    expect(queue.size()).toBe(2);
    expect(queue.nextElement()).toBe("A");
  });

  test("deve remover elementos da fila", () => {
    queue.enqueue("A");
    queue.enqueue("B");

    expect(queue.dequeue()).toBe("A");
    expect(queue.size()).toBe(1);
    expect(queue.nextElement()).toBe("B");
  });

  test("deve adicionar elementos prioritários na frente", () => {
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C", true);

    expect(queue.size()).toBe(3);
    expect(queue.nextElement()).toBe("C");
  });

  test("deve manter a ordem dos elementos prioritários", () => {
    queue.enqueue("A", true);
    queue.enqueue("B", true);
    queue.enqueue("C");

    expect(queue.size()).toBe(3);
    expect(queue.nextElement()).toBe("A");
    queue.dequeue();
    expect(queue.nextElement()).toBe("B");
  });

  test("deve retornar o próximo elemento sem removê-lo", () => {
    queue.enqueue("A");
    queue.enqueue("B");

    expect(queue.nextElement()).toBe("A");
    expect(queue.size()).toBe(2);
  });

  test("deve limpar a fila", () => {
    queue.enqueue("A");
    queue.enqueue("B");

    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });
});
