const mongoose = require("mongoose");
const Meal = require("./meal");
const Category = require("./category");

const menuSchema = new mongoose.Schema({
    name: String,
    description: String,
    calories: String,
    price: Number,
    customization: [customizationSchema],
    background_image: String,
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Category
    },
    items:[Meal]
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = {Menu}
