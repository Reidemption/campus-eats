const mongoose = require("mongoose");
const Meal = require("./meal");
const Category = require("./category");

const MenuSchema = new mongoose.Schema({
    name: String,
    description: String,
    calories: String,
    price: Number,
    background_image: String,
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    items:[Meal.MealSchema]
},{timestamps:true});

const MenuModel = mongoose.model("Menu", MenuSchema);
module.exports = {MenuModel,MenuSchema}
