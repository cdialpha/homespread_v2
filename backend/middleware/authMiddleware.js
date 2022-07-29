const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const passport = require("passport");

//two situations here, need to identify if they're one in the same
// (1) client runs a get request to see if user's JWT is legit
// (2) protect a backend route by seeing if request comes with JWT

const protect = asyncHandler(
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      console.log(req.user);
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
    next();
  }
);

module.exports = { protect };

//const User = require("../models/User.js");
