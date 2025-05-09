'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SensorData', [
      {
        alcohol: 0.05,
        vibration: 0.2,
        distance: 150,
        seatbelt: true,
        impact: 0.1,
        heart_rate: 75,
        lcd_display: 'SYSTEM OK',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alcohol: 0.1,
        vibration: 0.5,
        distance: 100,
        seatbelt: false,
        impact: 0.3,
        heart_rate: 80,
        lcd_display: 'WARNING',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SensorData', null, {});
  }
};
