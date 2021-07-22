const mongoose = require("mongoose");
const Menu = require("./menu");
const MealSides = require("./meal_side");

const mealSchema = new mongoose.Schema({
    name: String,
    description: String,
    calories: String,
    price: Number,
    customization: [customizationSchema],
    background_image: String,
    menu_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Menu
    },
    items:[MealSide]
});

const Meal = mongoose.model("Meal", mealSchema);
module.exports = {Meal}
