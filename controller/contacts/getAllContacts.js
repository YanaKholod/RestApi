const Contact = require("../../models/contact");

const getAll = async (req, res) => {
  const result = await Contact.find(); // получаем все данные с коллекции
  res.json(result);
};

module.exports = getAll;
