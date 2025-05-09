'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable('sensor_data');
    if (!tableDescription.heart_rate) {
      await queryInterface.addColumn('sensor_data', 'heart_rate', {
        type: Sequelize.INTEGER,
        allowNull: true,
      });
    }
    if (!tableDescription.lcd_display) {
      await queryInterface.addColumn('sensor_data', 'lcd_display', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable('sensor_data');
    if (tableDescription.heart_rate) {
      await queryInterface.removeColumn('sensor_data', 'heart_rate');
    }
    if (tableDescription.lcd_display) {
      await queryInterface.removeColumn('sensor_data', 'lcd_display');
    }
  }
};
