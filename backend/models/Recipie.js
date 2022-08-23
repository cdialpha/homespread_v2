const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    reviewer: mongoose.SchemaTypes.ObjectId,
    rating: Number,
    comment: String,
  },
  { timestamps: true }
);

const RecipieSchema = new mongoose.Schema({
  chefId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  dish_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tag: {
    type: [String],
    required: true,
  },
  image_url: {
    type: [String],
    required: true,
  },
  dish_description: {
    type: String,
    required: true,
  },
  serving_size: {
    type: String,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  potential_allergens: {
    type: String,
    default: null,
  },
  special: {
    type: [String],
    default: null,
  },
  Reviews: {
    average_rating: {
      type: Number,
    },
    number_of_ratings: {
      type: Number,
    },
    reviews: {
      type: [ReviewSchema],
    },
  },
});

module.exports = mongoose.model("Recipie", RecipieSchema);
