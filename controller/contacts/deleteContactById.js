const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const deleteContactById = async (req, res) => {
  const { id } = req.params;
  const delContact = await Contact.findByIdAndDelete(id);

  if (!delContact) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "Delete success" });
};

module.exports = deleteContactById;
