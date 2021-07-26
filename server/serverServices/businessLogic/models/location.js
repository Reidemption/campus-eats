const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    longtitude: {
        type:String,
        require:true
    },
    latitude: {
        type:String,
        require:true
    },
    map_url: {
        type:String,
        require:true
    },
    image_url: {
        type:String,
        require:true
    },
    google_url: {
        type:String,
        require:true
    },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }
},{timestamps:true});
const RoleModel = mongoose.model("Role", LocationSchema);

module.exports = {RoleModel,RoleSchema}
