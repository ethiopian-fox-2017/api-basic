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
      return queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        age: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Husni Habil',
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jonny Ismail',
        age: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      return queryInterface.bulkDelete('Users', [
      {
        name: 'John Doe',
        age: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Husni Habil',
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jonny Ismail',
        age: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  }
};
