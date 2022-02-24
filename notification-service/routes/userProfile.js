"use strict";

module.exports = (profile) => {
  const express = require("express");
  const router = express.Router();

  const vs = require("../validator");
  const validationHandler = require("../middlewares/validation-handler");

  const responseHandler = require("../utils/response-handler");

  router.post(
    "/set/userProfiles",
    validationHandler(vs["SendNotificationSchema"]),
    async function (req, res) {
      try {
        res.data = await profile.storeProfile(req.body);
        responseHandler(null, req, res);
      } catch (err) {
        responseHandler(err, req, res);
      }
    }
  );

  return router;
};
