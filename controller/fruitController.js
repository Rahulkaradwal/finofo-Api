const Fruit = require("../model/Fruit");

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

exports.getAllFruits = catchAsync(async (req, res, next) => {
  const fruits = await Fruit.find();
  res.status(200).json(fruits);
});
