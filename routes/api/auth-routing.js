const express = require("express");
const { validateBody, authenticate } = require("../../middleware");
const { schemas } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");
const authController = require("../../controller/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(authController.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(authController.login)
);

router.get("/current", authenticate, ctrlWrapper(authController.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(authController.logout));

router.patch(
  "/",
  authenticate,
  validateBody(schemas.changeSubscriptionSchema),
  ctrlWrapper(authController.updSubscription)
);

module.exports = router;
