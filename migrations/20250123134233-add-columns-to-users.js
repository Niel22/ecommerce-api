'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
    */
     await queryInterface.addColumn('Products', 'image', {
        allowNul: false,
        type: Sequelize.STRING
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
    */
     await queryInterface.removeColumn('Products', 'image');
  }
};
