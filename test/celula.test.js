const { Celula } = require("../src/celula");

describe("Celula", () => {
  let celula;

  beforeEach(() => {
    celula = new Celula(null, "elemento");
  });

  test("deve inicializar com um elemento", () => {
    expect(celula.getElemento()).toBe("elemento");
  });

  test("deve inicializar sem próxima célula", () => {
    expect(celula.getProxima()).toBe(null);
  });

  test("deve permitir definir a próxima célula", () => {
    const proximaCelula = new Celula(null, "proximoElemento");
    celula.setProxima(proximaCelula);

    expect(celula.getProxima()).toBe(proximaCelula);
  });

  test("deve permitir alterar o elemento da célula", () => {
    const novoElemento = "novoElemento";
    celula._elemento = novoElemento; // Acesso direto, já que não há um método setter

    expect(celula.getElemento()).toBe(novoElemento);
  });

  test("deve ser possível encadear células", () => {
    const segundaCelula = new Celula(null, "segundoElemento");
    celula.setProxima(segundaCelula);

    expect(celula.getProxima().getElemento()).toBe("segundoElemento");
  });
});
