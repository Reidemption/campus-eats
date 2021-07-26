const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true
    },
    password_hash:{
        type:String,
        require:true
    },
    firstname: {
        type:String,
        require:true
    },
    lastname: {
        type:String,
        require:true
    },
    user_info_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "UserInfo"
    },
    location:{
        type:String,
        require:true
    },
    session:{
      type:String
    },
    logged_in:{
        type: Boolean
    },
    last_loggin_time:{
        type:Date
    },
    isActive:{
        type:Boolean,
        default:false
    }
},{timestamps:true});
const UserModel = mongoose.model("User", UserSchema);

module.exports = {UserModel,UserSchema}
