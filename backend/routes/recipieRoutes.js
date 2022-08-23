const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getAllRecipies,
  getAllOneUsersRecipies,
  getUserRecipieById,
  addUserRecipie,
  updateUserRecipie,
  deleteUserRecipie,
} = require("../controllers/recipieController");

let recipieRouter = express.Router({ mergeParams: true });

recipieRouter.route("/").get(getAllRecipies);

recipieRouter
  .route("/:chefId")
  .get(getAllOneUsersRecipies)
  .post(protect, addUserRecipie);

recipieRouter
  .route("/:recipieId")
  .get(getUserRecipieById)
  .patch(updateUserRecipie)
  .delete(protect, deleteUserRecipie);

module.exports = recipieRouter;
