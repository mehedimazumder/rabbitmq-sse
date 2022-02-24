'use strict';

require('dotenv').config();

const TABLES = {
  UserProfile: 'user_profile'
};

module.exports = {
  "development": {
    username: "root",
    password: "0000",
    database: "sms_service_1_0_0",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    define: {
      underscored: true,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      },
      timestamps: true,
      tables: TABLES,
    },
    redis: {
      socket:{
        host: '127.0.0.1',
        port: 6379,
      },
      database: 0,
      password: 'foobared'
    },
  },
  "production": {
    username: "root",
    password: "0000",
    database: "sms_service_1_0_0",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    define: {
      underscored: true,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      },
      timestamps: true,
      tables: TABLES,
    },
    redis: {
      socket:{
        host: '127.0.0.1',
        port: 6379,
      },
      database: 0,
      password: 'foobared'
    },
  },
};
