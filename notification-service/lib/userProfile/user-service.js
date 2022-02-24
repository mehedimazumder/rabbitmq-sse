"use strict";

module.exports = (db, cache) => {
  const AppError = require("../app-error").AppError;
  const appCodes = require("../app-codes");
  const Constants = require("../constants");
  const redisKey = require("../../utils/redisKeyBuilder");

  return {
    async storeProfiles(profiles) {},
  };
};
