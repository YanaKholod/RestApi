const express = require("express");
const contactController = require("../../controller/contacts/contacts-controller");
const { isValidId, validateBody, authenticate } = require("../../middleware");
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../schemas/contactSchema");

const router = express.Router();

router.get("/", authenticate, contactController.getAll);

router.get(
  "/:id",
  authenticate,
  isValidId,
  ctrlWrapper(contactController.getById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.movieSchema),
  ctrlWrapper(contactController.addContact)
);

router.delete(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(contactController.deleteContactById)
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(contactController.updateContactById)
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.contactUpdateSchema),
  ctrlWrapper(contactController.updateFavorite)
);

module.exports = router;
