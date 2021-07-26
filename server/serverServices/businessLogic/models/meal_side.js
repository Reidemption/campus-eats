const mongoose = require("mongoose");
const Meal = require("./meal");
const SideType = require("./side_type");

const MealSideSchema = new mongoose.Schema({
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
},{timestamps:true});

const MealSideModel = mongoose.model("MealSide", MealSideSchema);
module.exports = {MealSideModel,MealSideSchema}
