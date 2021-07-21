const mongoose = require("mongoose");
const Meal = require("./meal");

const mealSideSchema = new mongoose.Schema({
    name: String,
    description: String,
    calories: String,
    price: Number,
    background_image: String,
    meal_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Meal
    }
});

const MealSide = mongoose.model("Meal", mealSideSchema);
module.exports = {MealSide}
