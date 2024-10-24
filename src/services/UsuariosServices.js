const dataSource = require('../database/models');
const Services = require('./Services.js');

class UsuarioServices extends Services {
  constructor() {
    super('Usuario');
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = UsuarioServices;
