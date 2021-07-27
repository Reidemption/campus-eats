const mongoose = require("mongoose");
const Category = require("./category");
const Hour = require("./hour");
const Tax = require("./tax");
const RestaurantSchema = new mongoose.Schema({
    path: String,
    name: String,
    logo: String,
    background_image: String,
    description: String,
    location: String,
    taxes: [Tax.TaxSchema],
    hours: [Hour.HourSchema],
    categories:[Category.CategorySchema]
},{timestamps:true});

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {RestaurantModel,RestaurantSchema}