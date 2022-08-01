const jwt = require("jsonwebtoken");
// const asyncHandler = require("express-async-handler");
const passport = require("passport");

const protect = passport.authenticate("jwt", { session: false });

module.exports = { protect };
