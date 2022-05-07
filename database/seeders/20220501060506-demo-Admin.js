'use strict';
const {Password} = require("../../utils/passwordHashAndCompare")
const {db_seeder_Admin_password} = require("../../devConfig")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [{
        firstName: 'Harut',
        lastName: 'Badalyan',
        email: 'badalyanharutyun@gmail.com',
        password: await Password.hash(db_seeder_Admin_password),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {});
  }
};