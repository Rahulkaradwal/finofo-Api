// models/Fruit.js
const mongoose = require("mongoose");

const NutritionSchema = new mongoose.Schema({
  calories: { type: Number, required: true },
  fat: { type: Number, required: true },
  sugar: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  protein: { type: Number, required: true },
});

const FruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, unique: true, required: true },
  family: { type: String, required: true },
  order: { type: String, required: true },
  genus: { type: String, required: true },
  nutritions: { type: NutritionSchema, required: true },
});

module.exports = mongoose.model("Fruit", FruitSchema);
