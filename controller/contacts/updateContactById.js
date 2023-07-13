const { HttpErrors } = require("../../helpers/HttpErrors");
const Contact = require("../../models/contact");

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

module.exports = updateContactById;
