const bcrypt = require("bcrypt");
const { HttpError } = require("../../helpers");
const User = require("../../models/user");

const register = async (req, res, next) => {
  console.log("Received a request to register:", req.body);

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
  });
};

module.exports = register;
