const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const { PORT } = require("./config/constants");

console.log(process.env.PORT);
console.log(PORT);

const app = express();

connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1", require("./routes/index"));

app.listen(process.env.PORT, () => {
  console.log(`Server is Listening on ${process.env.PORT}`);
});
