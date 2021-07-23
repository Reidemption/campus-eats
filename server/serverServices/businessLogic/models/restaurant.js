const mongoose = require("mongoose");
const Category = require("./category");
const Hour = require("./hour");
const RestaurantSchema = new mongoose.Schema({
    path: String,
    name: String,
    logo: String,
    background_image: String,
    description: String,
    location: String,
    hours: [Hour.HourSchema],
    categories:["Category"]
},{timestamps:true});

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {RestaurantModel,RestaurantSchema}