// const app = require('./app')

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })


const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://montebet2020:Ok7akPE6uUnrv4zb@cluster0.n3m0qif.mongodb.net/contacrs_reader?retryWrites=true&w=majority";

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

