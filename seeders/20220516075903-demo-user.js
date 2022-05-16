'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      username : 'Sargun',
      password : '1234',
      email: 'sargun@ilg.cat'
    },
    {
      username : 'chawla',
      password : '1234',
      email: 'chawla@ilg.cat'
    }
  
  
  ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
