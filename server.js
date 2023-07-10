// то что пользуется базами

const mongoose = require("mongoose"); // подключаемся к базе
const app = require("./app");
// const { DB_HOST } = require("./config"); // подключение с конфиг файла
const { DB_HOST } = process.env; // импорт с переменных окружения
require("dotenv").config();

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000); // подключаемся к базе и потом только запускаем сервер
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1); // закрывает все фонновые процессы
  });

// pass: jEeLwmQRFvrdqYjv
