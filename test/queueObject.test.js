const { Queue } = require("../src/queueObject");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    // Cria uma nova instância da fila antes de cada teste
    queue = new Queue();
  });

  test("deve inicializar uma fila vazia", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test("deve adicionar elementos na fila", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.toString()).toBe("1,2,3"); // Verifica a representação em string
  });

  test("deve remover elementos da fila na ordem correta", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const primeiroDequeue = queue.dequeue();
    expect(primeiroDequeue).toBe(1);
    expect(queue.size()).toBe(2);

    const segundoDequeue = queue.dequeue();
    expect(segundoDequeue).toBe(2);
    expect(queue.size()).toBe(1);

    const terceiroDequeue = queue.dequeue();
    expect(terceiroDequeue).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });

  test("deve retornar o próximo elemento sem removê-lo", () => {
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.nextElement()).toBe(4);
    expect(queue.size()).toBe(2); // O tamanho não deve mudar após chamar nextElement
  });

  test("deve limpar a fila", () => {
    queue.enqueue(6);
    queue.enqueue(7);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test("deve retornar string vazia quando a fila estiver vazia", () => {
    expect(queue.toString()).toBe("");
  });

  test("deve retornar a representação em string dos elementos da fila", () => {
    queue.enqueue(8);
    queue.enqueue(9);
    expect(queue.toString()).toBe("8,9");
  });
});
