const { HttpError } = require("../../helpers");
const Contact = require("../../models/contact");
const { schemas } = require("../../schemas/contactSchema");

const addContact = async (req, res) => {
  const { error } = schemas.addSchema.validate(req.body);

  if (error) {
    throw HttpError(400, "missing required name field");
  }

  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

module.exports = addContact;
