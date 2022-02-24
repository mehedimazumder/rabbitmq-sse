"use strict";

module.exports = (ValidationSchema, Joi) => {
  const item = Joi.object().keys({
    userId: Joi.string().max(20).required(),
    message: Joi.string().max(255).required(),
  });

  const items = Joi.array().items(item);
  return [ValidationSchema.define("SendNotificationSchema", items)];
};
