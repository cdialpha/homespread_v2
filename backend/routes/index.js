const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  changeRole,
  updateProfile,
  getChefs,
} = require("../controllers/userController");
const { generateUploadURL } = require("../lib/s3");
const { protect } = require("../middleware/authMiddleware");
const recipieRouter = require("./recipieRoutes");

// @desc    Dashboard
// @route   POST /register
router.post("/register", registerUser);

// @desc
// @route   POST /login
router.post("/login", loginUser);

// @desc
// @route   PATCH /become
router.patch("/become", protect, changeRole);

router.get("/s3url", protect, async (req, res) => {
  const url = await generateUploadURL();
  res.status(200).send(url);
});

router.get("/users", getChefs);

router.patch("/users/:userId", protect, updateProfile);

router.use("/recipies", recipieRouter);

module.exports = router;
