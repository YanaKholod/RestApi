const express = require("express");
const contactController = require("../../controller/contacts/contacts-controller");
const { isValidId, validateBody } = require("../../middleware");
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", contactController.getAll);

router.get("/:id", isValidId, ctrlWrapper(contactController.getById));

router.post(
  "/",
  validateBody(schemas.movieSchema),
  ctrlWrapper(contactController.addContact)
);

router.delete(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(contactController.deleteContactById)
);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(contactController.updateContactById)
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.contactUpdateSchema),
  ctrlWrapper(contactController.updateFavorite)
);

module.exports = router;
