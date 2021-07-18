require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/user.routes.js");
const errorController = require("./middlewares/errorController.js");
const authRouter = require("./routes/auth.routes.js");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/auth", authRouter);

app.use(errorController);

mongoose.connect(process.env.MOGO_URI, {
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
