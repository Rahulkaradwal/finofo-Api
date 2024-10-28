const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8000;
const app = require("./app");

const PORT = 3000;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.error("DB connection error:", err));

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
