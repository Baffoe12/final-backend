'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sensor_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alcohol: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      vibration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      distance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      seatbelt: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      impact: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      lat: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      lng: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      lcd_display: {
        type: Sequelize.STRING,
        allowNull: true
      },
      heart_rate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sensor_data');
  }
};
