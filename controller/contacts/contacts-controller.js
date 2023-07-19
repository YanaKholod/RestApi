const getAll = require("./getAllContacts");
const getById = require("./getContactById");
const addContact = require("./addContact");
const deleteContactById = require("./deleteContactById");
const updateContactById = require("./updateContactById");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAll,
  getById,
  addContact,
  deleteContactById,
  updateContactById,
  updateFavorite,
};
