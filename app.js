const express = require("express");
const AppError = require("./utils/AppError");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true); // Allow all origins
  },
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

const fruiteRouter = require("./route/fruitRoute");

app.use("/fruits", fruiteRouter);

// Handling unmatched routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
