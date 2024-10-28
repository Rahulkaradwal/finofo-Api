const mongoose = require("mongoose");

const app = require("./app");

const PORT = 3000;

// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );
// const DB = process.env.DATABASE;
const DB =
  "mongodb+srv://rahulkaradwal2000:wXHoIUhOmaNqnwMX@fruitapi.dmecq.mongodb.net/?retryWrites=true&w=majority&appName=FruitApi";
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.error("DB connection error:", err));

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
