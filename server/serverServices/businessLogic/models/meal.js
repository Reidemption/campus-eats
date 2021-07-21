const mongoose = require("mongoose");
const Menu = require("./menu");

const mealSchema = new mongoose.Schema({
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

const Meal = mongoose.model("Meal", mealSchema);
module.exports = {Meal}
