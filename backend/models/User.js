const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    reviewer: mongoose.SchemaTypes.ObjectId,
    rating: Number,
    comment: String,
  },
  { timestamps: true }
);

const reqString = {
  type: String,
  required: true,
};

const UserSchema = new mongoose.Schema(
  {
    name: {
      first: String,
      middle: String,
      last: String,
    },
    username: reqString,
    role: {
      type: String,
      enum: ["basic", "chef"],
      default: "basic",
    },
    hash: String,
    salt: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    profile_pic: {
      type: String,
      default: "https://boston-spread-profiles.s3.amazonaws.com/anon.png",
    },
    bio: String,
    rating: Number,
    cuisine_tags: [String],
    identify: [String],
    pickup_location: {
      address: String,
      city: String,
      state: String,
      zip: String,
    },
    offerings: [mongoose.SchemaTypes.ObjectId],
    reviews: [ReviewSchema],
    catering: false,
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", UserSchema);
