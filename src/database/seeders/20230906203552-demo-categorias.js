'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        titulo: 'Roupa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Tenis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Ocúlos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Boné',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
