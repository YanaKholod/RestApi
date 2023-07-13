// описываем схему=модуль для конечной валидации при отправке данных
const { Schema, model } = require("mongoose");
// делаем монгуз схему которая описывает какой объект будет сохранятся в базе
const { handleMongooseError } = require("../middleware/index");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
/* второй объект-аргумент=>настройки по примеру тамстамп будет записывать 
дату createdAt, updatedAt автоматом 
*/
contactSchema.post("save", handleMongooseError);

// перв агр с какой коллекцией будем работать второй-схема с которой работать
const Contact = model("contact", contactSchema);

// джои для схем и валидации данных, схемы могут быть разными и должны быть описаны в отд файле типо этого
const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const contactUpdateSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

// в месте где нужно отправить запрос в бд импортируем модель -> контроллер
module.exports = {
  Contact,
  addSchema,
  contactUpdateSchema,
};
