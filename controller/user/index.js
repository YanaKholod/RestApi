const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updSubscription = require("./updSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updSubscription,
  updateAvatar,
};
