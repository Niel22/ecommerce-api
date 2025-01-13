'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Adding the 'isBlocked' column with default value false
    await queryInterface.addColumn('Users', 'isBlocked', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      after: 'role'
    });
  },

  async down (queryInterface, Sequelize) {
    // Reverting the 'isBlocked' column addition
    await queryInterface.removeColumn('Users', 'isBlocked');
  }
};
