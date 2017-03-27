'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Users', [{
      name       : 'Daniel Agus',
      email      : 'aguspermadi94@gmail.com',
      createdAt  : new Date(),
      updatedAt  : new Date()
    }, {
      name       : 'Juan Anthony',
      email      : 'juan94@gmail.com',
      createdAt  : new Date(),
      updatedAt  : new Date()
    }, {
      name       : 'Andra Satria',
      email      : 'andra@gmail.com',
      createdAt  : new Date(),
      updatedAt  : new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
