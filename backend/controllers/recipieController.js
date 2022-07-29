const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const connectDB = require("../config/db");

const getAllUserRecipies = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    // const getRecipies = await User.findOneAndUpdate({});
  } catch (error) {
    res.status(401);
    next(err);
  }
});

const addUserRecipie = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    // const addRecipie = await User.findOneAndUpdate({});
  } catch (error) {
    res.status(401);
    next(err);
  }
});

const getUserRecipieById = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    // const { dish, description, size, ingredients, allergens, special } =
    //   req.body;
    // const getRecipie = await User.findOneAndUpdate({});
  } catch (error) {
    res.status(401);
    next(err);
  }
});

const updateUserRecipie = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    // const { dish, description, size, ingredients, allergens, special } =
    //   req.body;
    // const addRecipie = await User.findOneAndUpdate({});
  } catch (error) {
    res.status(401);
    next(err);
  }
});

const deleteUserRecipie = asyncHandler(async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.params);
    // const { dish, description, size, ingredients, allergens, special } =
    //   req.body;
    // const addRecipie = await User.findOneAndUpdate({});
  } catch (error) {
    res.status(401);
    next(err);
  }
});

module.exports = {
  addUserRecipie,
  deleteUserRecipie,
  updateUserRecipie,
  getUserRecipieById,
  getAllUserRecipies,
};
