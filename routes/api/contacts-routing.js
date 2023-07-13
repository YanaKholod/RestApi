const express = require("express");
const contactController = require("../../controller/contacts/contacts-controller");
const validateBody = require("../../decorator/validateBody");
const schemas = require("../../models/contact");
const { isValidId } = require("../../middleware");

const router = express.Router();

router.get("/", contactController.getAll);

router.get("/:id", isValidId, contactController.getById);

router.post(
  "/",
  validateBody(schemas.movieSchema),
  contactController.addContact
);

router.delete(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  contactController.deleteContactById
);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  contactController.updateContactById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.contactUpdateSchema),
  contactController.updateFavorite
);

// в пут,пост,делет вставляем правила валидации со схемы
module.exports = router;
