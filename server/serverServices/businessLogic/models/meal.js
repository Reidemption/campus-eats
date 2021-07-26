const mongoose = require("mongoose");
// const Menu = require("./menu");
const MealSide = require("./meal_side");

const MealSchema = new mongoose.Schema({
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
    meal_sides:[MealSide.MealSideSchema]
},{timestamps:true});

const MealModel = mongoose.model("Meal", MealSchema);
module.exports = {MealModel,MealSchema}
