const mongoose = require("mongoose");
const Category = require("./category");

const hourSchema = new mongoose.Schema({
    date: String,
    open: String,
    close: String,
    restaurant_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: Restaurant
    },
});

const restaurantSchema = new mongoose.Schema({
    path: String,
    name: String,
    logo: String,
    background_image: String,
    description: String,
    location: String,
    hours: [
        {
            type:Hour
        }
    ],
    categories:[
        {
            type:Category
        }
    ]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
const Hour = mongoose.model("Hour", hourSchema);

module.exports = {Restaurant, Hour}