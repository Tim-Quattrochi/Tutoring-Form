const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

connectDB();

//middleware
app.use(cors({ origin: "https://tutoringform-client.onrender.com" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1", require("./routes/index"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.all("*", (req, res, next) => {
    res.sendFile(
      path.resolve(__dirname, "../client/dist/index.html")
    );
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server is Listening on ${process.env.PORT}`);
});
