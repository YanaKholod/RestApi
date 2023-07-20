const mongoose = require("mongoose");
const app = require("./app");

// pass: 1JUK9JPUWrztR9y3

const DB_HOST =
  "mongodb+srv://kholodjana:1JUK9JPUWrztR9y3@yana.ihalwdp.mongodb.net/db-contacts?retryWrites=true&w=majority";
const PORT = 6000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 6000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
