const mongoose = require("mongoose");
const Menu = require("./menu");

const CategorySchema = new mongoose.Schema({
    name: String,
    restaurant_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Restaurant"
    },
    menus: [Menu.MenuSchema]
},{timestamps:true});

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = {CategoryModel,CategorySchema}