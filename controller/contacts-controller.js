const { HttpErrors } = require("../helpers/HttpErrors");
const ctrlWrapper = require("../decorator/controllWrapper");
const contacts = require("../models/contacts");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpErrors(404, "Not found, man");
  }

  res.json(result);
};

const addContact = async (req, res) => {
  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const delContact = await contacts.removeContact(contactId);

  if (!delContact) {
    throw HttpErrors(404, "Not found");
  }

  res.json(delContact);
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const updContact = await contacts.updateContact(contactId, req.body);

  if (!updContact) {
    throw HttpErrors(404, "Not found");
  }

  res.json(updContact);
};
// запиханы вадилации в отдельную обертку, в которую собсна тут и оборачиваем
module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateContact: ctrlWrapper(updateContact),
};
