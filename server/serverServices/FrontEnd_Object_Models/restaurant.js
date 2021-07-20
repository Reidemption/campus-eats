const dataAccess = require("../dataAccessLayer/DAO");

const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  name: String,
  calories: String,
  price: Double,
  customization_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customizations",
  },
});

const customizationSchema = new mongoose.Schema({
  name: String,
  options: [optionSchema],
  selected: Boolean,
  menu_id: { type: mongoose.Schema.Types.ObjectId, ref: "Menus" },
});

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  calories: String,
  price: Double,
  customization: [customizationSchema],
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
});

const categorySchema = new mongoose.Schema({
  name: String,
  menu: [menuSchema],
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
const Categories = mongoose.model("Categories", categorySchema);
const Menus = mongoose.model("Menus", menuSchema);
const Customizations = mongoose.model("Customizations", customizationSchema);

module.exports = { Restaurants, Categories, Menus, Customizations };
