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

  //if user doesn't exist, then create user via shcema and issue jwt
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

const changeRole = asyncHandler(async (req, res) => {
  const { username } = req.body;
  try {
    let update;
    let query = { "username": username };
    const options = { new: true };
    const user = await User.findOne(query);
    let role = user.role;
    console.log(role);
    if (role === "basic") {
      update = { $set: { "role": "chef" } };
    } else if (role === "chef") {
      update = { $set: { "role": "basic" } };
    }
    console.log(update);
    let updatedUser = await User.findOneAndUpdate(query, update, options);
    res.status(200).json({ "success": true, "user": updatedUser });
  } catch (err) {
    res.status(401);
    console.error(err);
  }
});

const updateProfile = asyncHandler(async (req, res) => {
  console.log(req.body, req.params);
  try {
    let { userId } = req.params;
    const { username, profilePic, phone, email, bio, tags, identify } =
      req.body;
    let query = { "_id": userId };
    let update = {
      $set: {
        "username": username,
        "profile_pic": profilePic,
        "phone_number": phone,
        "email": email,
        "bio": bio,
        "cuisine_tags": tags,
        "identify": identify,
      },
    };
    const options = { new: true };

    const updatedProfile = await User.findOneAndUpdate(query, update, options);

    console.log("query was: ", query, "updates are: ", update, updatedProfile);
    if (!updatedProfile) {
      res.status(400).json({
        success: false,
        message: "something went wrong with the udpate ",
      });
      return;
    }
    res.status(200).json({
      "success": true,
      "message": "Update request Recieved",
      "update": update,
    });
  } catch (err) {
    res.status(402).json(err);
    next(err);
  }
});

const getChefs = asyncHandler(async (req, res) => {
  try {
    const chefs = await User.where("role")
      .equals("chef")
      .limit(5)
      .select("username profile_pic bio identify cuisine_tags");
    console.log(chefs);
    res.status(200).json({ "chefs": chefs });
  } catch (err) {
    res.status(400).json(err);
    next(err);
  }
});

module.exports = {
  registerUser,
  loginUser,
  changeRole,
  updateProfile,
  getChefs,
};
