const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const MOGO_URI = require("./config/mogoose.config");

const app = express();

app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4000;

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

app.listen(PORT, () =>
  console.log(`connected on port "${PORT}" open http://localhost:${PORT}/`)
);
