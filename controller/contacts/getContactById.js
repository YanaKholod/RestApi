const Contact = require("../../models/contact");
const { HttpErrors } = require("../../helpers/HttpErrors");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpErrors(404, "Not found, man");
  }

  res.json(result);
};

module.export = getById;
