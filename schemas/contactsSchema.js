const Joi = require("joi");
// джои для схем и валидации данных, схемы могут быть разными и должны быть описаны в отд файле типо этого
const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = { addSchema };
