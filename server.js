const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 4000;

const appex = express();

appex.use(logger("dev"));

appex.use(express.urlencoded({ extended: true }));
appex.use(express.json());

appex.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


appex.use(require("./routes/api.js"));
appex.use(require("./routes/view.js"));

appex.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}!`);
});