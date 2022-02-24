'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('UserProfile', {
    msisdn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    language: {
      type: DataTypes.ENUM('BN', 'EN'),
      allowNull: false,
      defaultValue: 'EN'
    },
   
  }, {
    tableName: 'user_profile',
    timestamps: false
  });

  return UserProfile;
};