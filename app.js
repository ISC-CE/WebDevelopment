require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const authenticateToken = require("./src/app/middlewares/auth");
const cors = require("cors");

const indexRouter = require("./src/app/routes/index");
const usersRouter = require("./src/app/routes/users");
const authRouter = require("./src/app/routes/auth");

const app = express();
app.use(cors());

require("./src/infra/db/connection");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  return res;
});

module.exports = app;
