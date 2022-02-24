'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const UserProfile = queryInterface.sequelize.options.define.tables.UserProfile;
    return queryInterface.createTable(UserProfile, {
      msisdn: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true
      },
      language: {
        type: Sequelize.ENUM('BN', 'EN'),
        allowNull: false,
        defaultValue: 'EN'
      },
    }, {
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    const USERPROFILE = queryInterface.sequelize.options.define.tables.UserProfile;
    return queryInterface.dropTable(USERPROFILE);
  }
};
