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

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
//   });

//PASSPORT SETUP & INITIALIZATION
require("./config/passportJWT")(passport);
app.use(passport.initialize());

//ROUTES
app.use("/", require("./routes/index"));

app.use(errorHandler);

app.use(express.static(path.join(__dirname, "public")));
