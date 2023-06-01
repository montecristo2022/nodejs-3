const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env

// const { DB_HOST } = require('./config')

// console.log(process.env.DB_HOST)

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Сервер запущен на порту 3000!!!");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

