const mongoose = require("mongoose");
const Meal = require("./meal");
const SideType = require("./side_type");

const mealSideSchema = new mongoose.Schema({
    name: String,
    calories: String,
    price: Number,
    background_image: String,
    side_type:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "SideType"
    },
    meal_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal"
    }
});

const MealSide = mongoose.model("MealSide", mealSideSchema);
module.exports = MealSide
