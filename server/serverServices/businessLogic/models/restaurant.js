const mongoose = require("mongoose");

const hourSchema = new mongoose.Schema({
    date: String,
    open: String,
    close: String,
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurants" },
});

const restaurantSchema = new mongoose.Schema({
    path: String,
    name: String,
    logo: String,
    background_image: String,
    description: String,
    location: String,
    hours: Hour
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
const Hour = mongoose.model("Hour", hourSchema);

module.exports = {Restaurant, Hours}