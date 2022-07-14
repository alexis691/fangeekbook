'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FilmSeasons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      film_id: {
        type: Sequelize.NUMBER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      firstEmision: {
        type: Sequelize.DATE
      },
      lastEmision: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FilmSeasons');
  }
};