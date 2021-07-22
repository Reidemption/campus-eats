const mongoose = require("mongoose");
const Menu = require("./menu");
const MealSide = require("./meal_side");

const mealSchema = new mongoose.Schema({
    name: String,
    description: String,
    calories: String,
    price: Number,
    background_image: String,
    menu_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu"
    },
    note:{
        type:String
    },
    meal_sides:["MealSide"]
});

const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal
