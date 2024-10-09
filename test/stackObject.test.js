// test/stackObject.test.js

const { Stack } = require("../src/stackObject");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack(); // Cria uma nova instância da pilha antes de cada teste
  });

  test("deve estar vazia na inicialização", () => {
    expect(stack.isEmpty()).toBe(true); // Testa se a pilha está vazia
    expect(stack.size()).toBe(0); // Testa se o tamanho é 0
  });

  test("deve adicionar elementos na pilha", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(3); // Testa o tamanho após adicionar elementos
    expect(stack.peek()).toBe(3); // Testa o elemento no topo
  });

  test("deve remover elementos da pilha", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3); // Testa a remoção do último elemento adicionado
    expect(stack.size()).toBe(2); // Testa o tamanho após a remoção
    expect(stack.peek()).toBe(2); // Testa o novo elemento no topo
  });

  test("deve retornar undefined ao remover de uma pilha vazia", () => {
    expect(stack.pop()).toBe(undefined); // Remover de uma pilha vazia deve retornar undefined
  });

  test("deve limpar a pilha", () => {
    stack.push(1);
    stack.push(2);
    stack.clear(); // Limpar a pilha

    expect(stack.isEmpty()).toBe(true); // Testa se a pilha está vazia
    expect(stack.size()).toBe(0); // Testa se o tamanho é 0
  });

  test("deve retornar o último elemento sem removê-lo", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2); // Testa o elemento no topo
    expect(stack.size()).toBe(2); // Assegura que o tamanho não mudou
  });

  test("toString deve retornar elementos em formato separado por vírgulas", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toString()).toBe("1, 2, 3"); // Testa a representação em string
  });

  test("toString deve retornar string vazia para pilha vazia", () => {
    expect(stack.toString()).toBe(""); // Testa a representação em string de uma pilha vazia
  });
});
