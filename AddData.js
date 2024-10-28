const mongoose = require("mongoose");
const fs = require("fs");
const Fruit = require("./model/Fruit");

const app = require("./app");

const DB =
  "mongodb+srv://rahulkaradwal2000:wXHoIUhOmaNqnwMX@fruitapi.dmecq.mongodb.net/?retryWrites=true&w=majority&appName=FruitApi";

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.error("DB connection error:", err));

const fruits = JSON.parse(fs.readFileSync(`${__dirname}/fruits.json`, "utf-8"));

const importData = async () => {
  try {
    await Fruit.create(fruits, { validateBeforeSave: false });
    console.log("Data loaded");
  } catch (err) {
    console.log(err);
  }
};

importData();
