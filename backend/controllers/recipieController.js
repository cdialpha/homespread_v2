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
    const getRecipies = await Recipie.find()
      .populate("chefId")
      .skip(skip)
      .limit(limit);
    res.status(201).json({ success: true, getRecipies });
  } catch (error) {
    res.status(401);
    console.error(error);
  }
});

const getAllOneUsersRecipies = asyncHandler(async (req, res) => {
  console.log(req);
  try {
    let { chefId } = req.params;
    console.log(chefId);
    chefId = chefId.substring(1);
    const query = chefId.toObjectId();
    const getRecipies = await Recipie.find({
      "chefId": query,
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
      chefId: req.user._id,
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

const updateUserRecipie = asyncHandler(async (req, res, next) => {
  try {
    console.log(req.params);
    const { recipieId } = req.params;
    // id = id.toObjectId();
    const {
      dish,
      description,
      size,
      ingredients,
      allergens,
      special,
      rating,
      price,
      tags,
    } = req.body;

    let query = { "_id": recipieId };

    // I think that updating values that are unchanged could be more expensive.
    // Consider identifying which are unchanged (either on the front end or backend) and filtering the object to remove any undefined key-pairs
    // (e.g. const asArray = Object.entries(obj);
    // const filtered = asArray.filter(([key, value]) => value !=== undefined'))

    let update = {
      $set: {
        "dish": dish,
        "description": description,
        "size": size,
        "ingredients": ingredients,
        "allergens": allergens,
        "special": special,
        "rating": rating,
        "price": price,
        "tags": tags,
      },
    };

    const options = { new: true };

    const updatedRecipie = await Recipie.findOneAndUpdate(
      query,
      update,
      options
    );

    console.log("query was: ", query, "updates are: ", update, updatedRecipie);
    if (updatedRecipie) {
      res.status(200).json({
        "success": true,
        "message": "Update request Recieved",
        "update": update,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "something went wrong with the udpate ",
      });
    }
  } catch (err) {
    res.status(401).json(err);
    next(err);
  }
});

const deleteUserRecipie = asyncHandler(async (req, res, next) => {
  try {
    const { recipieId } = req.params;
    console.log(recipieId);
    const recipie = await Recipie.findById(recipieId);
    console.log(recipie);

    if (!recipie) {
      res.status(400);
      throw new Error("Recipie not found");
    }
    await recipie.remove();
    res.status(200).json({ message: `Recipie ${recipieId} deleted` });

    // const deleteRecipie = await User.findOneAndDelete({ _id: id });
    // if (deleteRecipie) {
    //   res
    //     .status(200)
    //     .json({ "success": true, "message": `recipie ${id} deleted` });
    // }
    // if (!deleteRecipie) {
    //   res
    //     .status(400)
    //     .json({ "success": false, "message": `recipie ${id} not found` });
    // }
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
