const Controller = require('./Controller.js');
const UsuariosServices = require('../services/UsuariosServices.js');

const usuarioServices = new UsuariosServices();

class UsuarioController extends Controller {
  constructor() {
    super(usuarioServices);
  }

}

module.exports = UsuarioController;
