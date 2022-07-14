'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FilmSeasonEpisodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      film_season: {
        type: Sequelize.NUMBER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      runtime: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('FilmSeasonEpisodes');
  }
};