const mongoose = require("mongoose");
// const Restaurant = require("./restaurant");

const sideTypeSchema = new mongoose.Schema({
    name: String,
    restaurant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant"
    }
});

const SideType = mongoose.model("SideType", sideTypeSchema);
module.exports = SideType
