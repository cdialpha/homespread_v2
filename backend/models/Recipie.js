const mongoose = require("mongoose");

const RecipieSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  dish_name: {
    type: String,
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
});

module.exports = mongoose.model("Recipie", RecipieSchema);
