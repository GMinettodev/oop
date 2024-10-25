const { ListaLigada } = require("../src/listaLigada"); // Ajuste o caminho conforme necessário

describe("ListaLigada", () => {
  let lista;

  beforeEach(() => {
    lista = new ListaLigada();
  });

  test("deve começar vazia", () => {
    expect(lista.tamanho()).toBe(0);
    expect(lista.toString()).toBe("[]");
  });

  test("deve adicionar um elemento no início", () => {
    lista.adicionaNoComeco(1);
    expect(lista.tamanho()).toBe(1);
    expect(lista.toString()).toBe("[1]");
  });

  test("deve adicionar um elemento no final", () => {
    lista.adicionar(2);
    expect(lista.tamanho()).toBe(1);
    expect(lista.toString()).toBe("[2]");
    lista.adicionar(3);
    expect(lista.tamanho()).toBe(2);
    expect(lista.toString()).toBe("[2, 3]");
  });

  test("deve adicionar um elemento em uma posição específica", () => {
    lista.adicionar(4);
    lista.adiciona(0, 1); // Adicionar no início
    lista.adiciona(1, 2); // Adicionar na posição 1
    lista.adiciona(3, 3); // Adicionar na posição 3 (final)

    expect(lista.tamanho()).toBe(4);
    expect(lista.toString()).toBe("[1, 2, 4, 3]");
  });

  test("deve remover do início", () => {
    lista.adicionar(5);
    lista.adicionaNoComeco(1);

    lista.removeDoComeco();

    expect(lista.tamanho()).toBe(1);
    expect(lista.toString()).toBe("[5]");
  });

  test("deve remover do fim", () => {
    lista.adicionaNoComeco(1);
    lista.adicionar(2);

    lista.removeDoFim();

    expect(lista.tamanho()).toBe(1);
    expect(lista.toString()).toBe("[1]");
  });

  test("deve remover de uma posição específica", () => {
    lista.adicionaNoComeco(1);
    lista.adicionar(2);
    lista.adicionar(3);

    lista.remove(1); // remover o elemento na posição 1
    expect(lista.tamanho()).toBe(2);
    expect(lista.toString()).toBe("[1, 3]");
  });

  test("deve lançar um erro ao remover de uma posição inválida", () => {
    expect(() => lista.remove(0)).toThrow("Posição não existe");
  });

  test("deve retornar se o elemento está na lista", () => {
    lista.adicionaNoComeco(1);
    lista.adicionar(2);
    lista.adicionar(3);

    expect(lista.contem(2)).toBe(true);
    expect(lista.contem(4)).toBe(false);
  });

  test("deve recuperar um elemento por posição", () => {
    lista.adicionaNoComeco(1);
    lista.adicionar(2);

    expect(lista.pega(0)).toBe(1);
    expect(lista.pega(1)).toBe(2);
  });

  test("deve lançar um erro ao acessar uma posição inválida", () => {
    expect(() => lista.pega(0)).toThrow("Posição não existe");
  });
});
