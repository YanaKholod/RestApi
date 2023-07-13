// то что пользуется базами

const mongoose = require("mongoose"); // подключаемся к базе
const app = require("./app");
// const { DB_HOST } = require("./config"); // подключение с конфиг файла
// const { DB_HOST } = process.env; // импорт с переменных окружения
const DB_HOST =
  "mongodb+srv://kholodjanapups:jEeLwmQRFvrdqYjv@yana.ihalwdp.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    }); // подключаемся к базе и потом только запускаем сервер
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1); // закрывает все фонновые процессы
  });

// pass: jEeLwmQRFvrdqYjv
