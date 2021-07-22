const mongoose = require("mongoose");
const Category = require("./category");
const Hour = require("./hour");
const restaurantSchema = new mongoose.Schema({
    path: String,
    name: String,
    logo: String,
    background_image: String,
    description: String,
    location: String,
    hours: ["Hour"],
    categories:["Category"]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant