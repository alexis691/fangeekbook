'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FilmDetails', {
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
      totalSeasons: {
        type: Sequelize.NUMBER
      },
      totalEpisodes: {
        type: Sequelize.NUMBER
      },
      endDate: {
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
    await queryInterface.dropTable('FilmDetails');
  }
};