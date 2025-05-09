'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('AccidentEvents', [
      {
        id: 'abc123',
        alcohol: 0.02,
        vibration: 0.8,
        distance: 20,
        seatbelt: true,
        impact: 0.9,
        lat: 5.6545,
        lng: -0.1869,
        lcd_display: 'ACCIDENT DETECTED',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'def456',
        alcohol: 0.04,
        vibration: 0.7,
        distance: 15,
        seatbelt: false,
        impact: 0.8,
        lat: 5.6540,
        lng: -0.1875,
        lcd_display: 'ACCIDENT DETECTED',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AccidentEvents', null, {});
  }
};
