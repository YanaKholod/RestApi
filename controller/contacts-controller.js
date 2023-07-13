const { HttpErrors } = require("../helpers/HttpErrors");
const ctrlWrapper = require("../decorator/controllWrapper");
// const contacts = require("../models/contacts");
const Contact = require("../models/contact"); // модель=класс

const getAll = async (req, res) => {
  const result = await Contact.find(); // получаем все данные с коллекции
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpErrors(404, "Not found, man");
  }

  res.json(result);
};

const addContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const deleteContactById = async (req, res) => {
  const { id } = req.params;
  const delContact = await Contact.findByIdAndDelete(id);

  if (!delContact) {
    throw HttpErrors(404, "Not found");
  }

  res.json({ message: "Delete success" });
};

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const updContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updContact) {
    throw HttpErrors(404, "Not found");
  }

  res.json(updContact);
};
// обновит поля которые ему передадут
const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const updContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

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
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContactById: ctrlWrapper(updateContactById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
