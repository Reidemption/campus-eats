const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username: {
        type:String,
        require:true},
    name: {
        type:String,
        require:true},
    session:{
      type:String},
    position:{
        type:String,
        require:true
    }
});
