const mongoose = require("mongoose");
const UserInfo = require("./user_information");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true
    },
    user_info_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "UserInfo"
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
