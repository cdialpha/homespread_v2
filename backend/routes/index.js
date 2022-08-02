const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const { generateUploadURL } = require("../lib/s3");
const { protect } = require("../middleware/authMiddleware");
const {
  getAllOneUsersRecipies,
  getUserRecipieById,
  addUserRecipie,
  updateUserRecipie,
  deleteUserRecipie,
} = require("../controllers/recipieController");

// @desc    Dashboard
// @route   POST /register
router.post("/register", registerUser);

// @desc
// @route   POST /login
router.post("/login", loginUser);

// @desc
// @route   POST /login
router.get("/protected", protect, (req, res) => {
  console.log(req.user);
  res.status(200).json({ success: true, msg: "you are authorized!" });
});

router.get("/s3url", protect, async (req, res) => {
  const url = await generateUploadURL();
  res.status(200).send(url);
});

var recipieRouter = express.Router({ mergeParams: true });
router.use("/recipies", recipieRouter);

recipieRouter
  .route("/")
  .get(getAllOneUsersRecipies)
  .post(protect, addUserRecipie);

recipieRouter
  .route("/:recipieId")
  .get(getUserRecipieById)
  .put(protect, updateUserRecipie)
  .delete(protect, deleteUserRecipie);

module.exports = router;
