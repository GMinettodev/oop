const { Celula } = require("./celula");

class ListaLigada {
  constructor() {
    this._primeira = null;
    this._ultima = null;
    this._totalDeElementos = 0;
  }

  adicionaNoComeco(elemento) {
    let nova = new Celula(this._primeira, elemento);
    this._primeira = nova;
    if (this._totalDeElementos == 0) {
      // caso especial da lista vazia
      this._ultima = this._primeira;
    }
    this._totalDeElementos++;
  }

  adicionar(elemento) {
    if (this._totalDeElementos == 0) {
      this.adicionaNoComeco(elemento);
    } else {
      let nova = new Celula(null, elemento);
      this._ultima.setProxima(nova);
      this._ultima = nova;
      this._totalDeElementos++;
    }
  }

  toString() {
    // Verificando se a Lista está vazia
    if (this._totalDeElementos == 0) {
      return "[]";
    }
    let str = "[";
    let atual = this._primeira;
    // Percorrendo até o penúltimo elemento.
    for (let i = 0; i < this._totalDeElementos - 1; i++) {
      str += atual.getElemento();
      str += ", ";
      atual = atual.getProxima();
    }
    // último elemento
    str += atual.getElemento();
    str += "]";
    return str;
  }

  posicaoOcupada(posicao) {
    return posicao >= 0 && posicao < this._totalDeElementos;
  }

  pegaCelula(posicao) {
    if (!this.posicaoOcupada(posicao)) {
      throw new Error("Posição não existe");
    }
    let atual = this._primeira;
    for (let i = 0; i < posicao; i++) {
      atual = atual.getProxima();
    }
    return atual;
  }
  adiciona(posicao, elemento) {
    if (posicao == 0) {
      // No começo.
      this.adicionaNoComeco(elemento);
    } else if (posicao == this._totalDeElementos) {
      // No fim.
      this.adicionar(elemento);
    } else {
      let anterior = this.pegaCelula(posicao - 1);
      let nova = new Celula(anterior.getProxima(), elemento);
      anterior.setProxima(nova);
      this._totalDeElementos++;
    }
  }

  pega(posicao) {
    return this.pegaCelula(posicao).getElemento();
  }

  removeDoComeco() {
    if (!this.posicaoOcupada(0)) {
      throw new Error("Posição não existe");
    }
    this._primeira = this._primeira.getProxima();
    this._totalDeElementos--;
    if (this._totalDeElementos == 0) {
      this._ultima = null;
    }
  }

  removeDoFim() {
    if (!this.posicaoOcupada(this._totalDeElementos - 1)) {
      throw new Error("Posição não existe");
    }
    if (this._totalDeElementos == 1) {
      this.removeDoComeco();
    } else {
      let penultima = this.pegaCelula(this._totalDeElementos - 2);
      penultima.setProxima(null);
      this._ultima = penultima;
      this._totalDeElementos--;
    }
  }

  remove(posicao) {
    if (!this.posicaoOcupada(posicao)) {
      throw new Error("Posição não existe");
    }
    if (posicao == 0) {
      this.removeDoComeco();
    } else if (posicao == this._totalDeElementos - 1) {
      this.removeDoFim();
    } else {
      let anterior = this.pegaCelula(posicao - 1);
      let atual = anterior.getProxima();
      let proxima = atual.getProxima();
      anterior.setProxima(proxima);
      this._totalDeElementos--;
    }
  }

  contem(elemento) {
    let atual = this._primeira;
    while (atual != null) {
      if (atual.getElemento() === elemento) {
        return true;
      }
      atual = atual.getProxima();
    }
    return false;
  }

  tamanho() {
    return this._totalDeElementos;
  }
}

module.exports = { ListaLigada };
