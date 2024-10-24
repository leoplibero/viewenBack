const Controller = require('./Controller.js');
const ProdutosServices = require('../services/ProdutosServices.js');

const produtoServices = new ProdutosServices();

class ProdutoController extends Controller {
  constructor() {
    super(produtoServices);
  }
}

module.exports = ProdutoController;
