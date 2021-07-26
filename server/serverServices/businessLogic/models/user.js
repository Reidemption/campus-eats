const mongoose = require("mongoose");
const UserInfo = require("./user_information");

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required:[true,"Please enter your email"]
    },
    hashed_password:{
        type:String,
        required:[true,"Please enter your password"]
    },
    profile_pic:{
        type:String,
        default:""
    },
    user_info:UserInfo.UserInfoSchema,
    location:{
        type:String,
        default:""
    },
    session:{
      type:String,
      default:""
    },
    logged_in:{
        type: Boolean,
        default: false
    },
    last_loggin_time:{
        type:Date,
        default:Date.now
    },
    isActive:{
        type:Boolean,
        default:false
    }
},{timestamps:true});
const UserModel = mongoose.model("User", UserSchema);

module.exports = {UserModel,UserSchema}
