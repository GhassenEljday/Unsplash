const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const MOGO_URI = require("./config/mogoose.config");
const userRoute = require("./routes/user.routes.js");
const userController = require("./controllers/user.controller.js");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoute);

app.use((err, req, res, next) => {
  console.log("congrats you hit the error middleware");
  console.log(err);
});

//! get all users and display it on "/api/users"
app.get("/api/users", userController.getAll);

mongoose.connect(MOGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on("error", (err) => {
  throw err;
});

mongoose.connection.once("open", () => console.log("connected to mongo"));

app.listen(PORT, () => console.log(`connected on port "${PORT}"`));
