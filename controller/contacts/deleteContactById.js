const { HttpErrors } = require("../../helpers/HttpErrors");
const Contact = require("../../models/contact");

const deleteContactById = async (req, res) => {
  const { id } = req.params;
  const delContact = await Contact.findByIdAndDelete(id);

  if (!delContact) {
    throw HttpErrors(404, "Not found");
  }

  res.json({ message: "Delete success" });
};

module.exports = deleteContactById;
