const express = require('express');
const usuarios = require('./usuariosRoute.js');
const categorias = require('./categoriasRoute.js');
const produtos = require('./produtosRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    usuarios,
    categorias,
    produtos
  );
};
