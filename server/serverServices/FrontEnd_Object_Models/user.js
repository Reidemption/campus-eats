const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true
    },
    position:{
        type:String,
        require:true
    },
    session:{
      type:String
    },
    logged_in:{
        type: Boolean
    }
});
const User = mongoose.model("User", userSchema);

module.exports = User
