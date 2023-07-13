const { HttpErrors } = require("../../helpers/HttpErrors");
const Contact = require("../../models/contact");

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

module.exports = updateFavorite;
