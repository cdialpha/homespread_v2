const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const {
  genPassword,
  issueJWT,
  validPassword,
} = require("../lib/passwordUtils");
const connectDB = require("../config/db");
const passport = require("passport");

const registerUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const { username, password } = req.body;
  const saltHash = genPassword(password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  //first check to see if user exists
  const checkExistingUser = await User.findOne({ username });
  console.log("user exists? ", checkExistingUser);
  if (checkExistingUser) {
    res.status(400);
    throw new Error("user already exists!");
  }

  //if user doesn't exist, then create user shcema and issue jwt
  else {
    const newUser = await User.create({
      username,
      hash,
      salt,
    })
      .then((user) => {
        const jwt = issueJWT(user._id);
        res.status(201).json({
          success: true,
          user,
          token: jwt.token,
          expires: jwt.expires,
        });
      })
      .catch((err) => next(err));
  }
});

const loginUser = asyncHandler(async (req, res, next) => {
  // look to see if the user is in the database
  const user = await User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        res.status(401).json({ success: false, msg: "could not find user" });
      }
      const isValid = validPassword(req.body.password, user.hash, user.salt);

      if (isValid) {
        const jwt = issueJWT(user._id);
        res.status(201).json({
          success: true,
          user,
          token: jwt.token,
          expires: jwt.expires,
        });
      } else {
        res.status(401).json({ success: false, msg: "password incorrect" });
      }
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = {
  registerUser,
  loginUser,
};
