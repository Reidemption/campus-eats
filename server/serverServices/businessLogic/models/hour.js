const mongoose = require("mongoose");
// const Restaurant = require("./restaurant");

const HourSchema = new mongoose.Schema({
    date: String,
    open: String,
    close: String,
    restaurant_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Restaurant"
    }
},{timestamps:true});

const HourModel = mongoose.model("Hour", HourSchema);

module.exports =  {HourModel,HourSchema}