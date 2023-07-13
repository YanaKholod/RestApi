const ctrlWrapper = require("../../decorator/controllWrapper");
const getAll = require("./getAllContacts");
const getById = require("./getContactById");
const addContact = require("./addContact");
const deleteContactById = require("./deleteContactById");
const updateContactById = require("./updateContactById");
const updateFavorite = require("./updateFavorite");

// експорт усіх контроллерів і імпорт у об'єкті разом

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContactById: ctrlWrapper(updateContactById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
