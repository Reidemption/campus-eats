const mongoose = require("mongoose");

const custom_optionSchema = new mongoose.Schema({
  type: String,
  name: String,
  calories: String,
  price: Number,
  selected: Boolean,
  menu_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menus",
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurants" },
});

const menuSchema = new mongoose.Schema({
  name: String,
  image_url: String,
  description: String,
  calories: String,
  price: Number,
  note: String,
  custom_options: [custom_optionSchema],
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurants" },
});

const categorySchema = new mongoose.Schema({
  name: String,
  menus: [menuSchema],
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurants" },
});

const hourSchema = new mongoose.Schema({
  date: String,
  open: String,
  close: String,
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurants" },
});

const restaurantSchema = new mongoose.Schema({
  path: String,
  name: String,
  logo: String,
  background_image: String,
  description: String,
  location: String,
  hours: [hourSchema],
  categories: [categorySchema],
});

const Restaurants = mongoose.model("Restaurants", restaurantSchema);

module.exports = { Restaurants };
