const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const connectDB = require("../config/db");
const Recipie = require("../models/Recipie");

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
    const {
      dish,
      S3ImageUrl,
      description,
      size,
      ingredients,
      allergens,
      special,
    } = req.body;

    const newRecipie = await Recipie.create({
      userId: req.user._id,
      dish_name: dish,
      image_url: S3ImageUrl,
      dish_description: description,
      serving_size: size,
      ingredients: ingredients,
      potential_allergens: allergens,
      special: special,
    });
    res.status(201).json({
      success: true,
      newRecipie,
    });
  } catch (error) {
    res.status(403);
    console.error(error);
    throw new Error("something went wrong");
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
