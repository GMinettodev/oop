class Celula {
  constructor(proxima, elemento) {
    this._proxima = proxima;
    this._elemento = elemento;
  }
  setProxima(proxima) {
    this._proxima = proxima;
  }
  getProxima() {
    return this._proxima;
  }
  getElemento() {
    return this._elemento;
  }
}

module.exports = { Celula };
