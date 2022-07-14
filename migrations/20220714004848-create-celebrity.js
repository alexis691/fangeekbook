'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Celebrities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      birth_country: {
        type: Sequelize.NUMBER
      },
      full_name: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      birth_place: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      status: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Celebrities');
  }
};