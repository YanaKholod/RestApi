const express = require("express");
const contactController = require("../../controller/contacts-controller");
const { validateBody } = require("../../decorator/validateBody");
const schemas = require("../../schemas/contactsSchema");

const router = express.Router();

router.get("/", contactController.getAll);
router.get("/:contactId", contactController.getById);
router.post("/", validateBody(schemas.addSchema), contactController.addContact);
router.delete(
  "/:contactId",
  validateBody(schemas.addSchema),
  contactController.deleteContact
);
router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  contactController.updateContact
);

module.exports = router;
