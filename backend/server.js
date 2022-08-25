const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const path = require("path");
const fs = require("fs");
const { errorHandler } = require("./middleware/errorMiddleware");

//GEENERAL SETUP
const app = express();
dotenv.config({ path: "../../homespread_v2.env" });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV}Listening on port${PORT}`.cyan
      .underline
  )
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());

//PASSPORT SETUP & INITIALIZATION
require("./config/passportJWT")(passport);
app.use(passport.initialize());

//ROUTES
app.use("/", require("./routes/index"));

app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.length("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("please set to production"));
}
