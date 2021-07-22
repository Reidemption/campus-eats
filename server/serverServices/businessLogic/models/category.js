const mongoose = require("mongoose");
const Restaurant = require("./restaurant");
const Menu = require("./menu");

const categorySchema = new mongoose.Schema({
    name: String,
    restaurant_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Restaurant"
    },
    menus: ["Menu"]
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category