const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const connectDB = require("../config/db");
const Recipie = require("../models/Recipie");

String.prototype.toObjectId = function () {
  var ObjectId = require("mongoose").Types.ObjectId;
  return new ObjectId(this.toString());
};

const getAllRecipies = asyncHandler(async (req, res) => {
  try {
    let { limit, page } = req.query;
    let skip = limit * (page - 1);
    console.log(limit, page, skip);
    const getRecipies = await Recipie.find().skip(skip).limit(limit);
    res.status(201).json({ success: true, getRecipies });
  } catch (error) {
    res.status(401);
    console.error(error);
  }
});

const getAllOneUsersRecipies = asyncHandler(async (req, res) => {
  try {
    let { userId } = req.params;
    userId = userId.substring(1);
    const query = userId.toObjectId();
    const getRecipies = await Recipie.find({
      "userId": query,
    });
    console.log(getRecipies);
    if (getRecipies) {
      res.status(200).json({ "success": true, getRecipies });
    }
    if (!getRecipies) {
      res.status(400).json({ "sucess": false, "message": "no recipies found" });
    }
  } catch (error) {
    res.status(401);
    console.error(error);
  }
});

const addUserRecipie = asyncHandler(async (req, res) => {
  try {
    const {
      dish,
      S3ImageUrls,
      description,
      size,
      ingredients,
      allergens,
      special,
    } = req.body;

    const newRecipie = await Recipie.create({
      userId: req.user._id,
      dish_name: dish,
      image_url: S3ImageUrls,
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
  getAllRecipies,
  addUserRecipie,
  deleteUserRecipie,
  updateUserRecipie,
  getUserRecipieById,
  getAllOneUsersRecipies,
};
