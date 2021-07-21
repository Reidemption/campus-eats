const mongoose = require("mongoose");
const Restaurant = require("./restautant");

const categorySchema = new mongoose.Schema({
    name: String,
    menu: Menu,
    restaurant_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: Restaurant
    }
});

const Category = mongoose.model("Categories", categorySchema);

module.exports = {Category}