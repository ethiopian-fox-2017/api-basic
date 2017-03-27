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
      name:'Anthony Juan',
      address:'Galaxy Bekasi',
      email:'juanjuan@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Budiono',
      address:'Kemang Pratama Bekasi',
      email:'budidi@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Aselole Jos',
      address:'Galaxy Bekasi',
      email:'aselole@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
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
