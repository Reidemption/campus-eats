const mongoose = require("mongoose");
const Restaurant = require("./restaurant");

const hourSchema = new mongoose.Schema({
    date: String,
    open: String,
    close: String,
    restaurant_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Restaurant"
    },
});

const Hour = mongoose.model("Hour", hourSchema);

module.exports =  Hour