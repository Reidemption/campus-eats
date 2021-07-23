const mongoose = require("mongoose");
const User = require("./user");
const Order = require("./order");

const userInfoSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true
    },
    hashed_pwd: {
        type:String,
        require:true
    },
    dnumber: {
        type:String,
        require:true
    },
    first_name: {
        type:String,
        require:true
    },
    last_name: {
        type:String,
        require:true
    },
    contacts:{
        address:{
            type: String,
            require: true
        },
        phone:String,
        email:String
    },
    position:{
        type:String,
        require:true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    },
    order_history:[],
    delivery_history:[]
},{timestamps:true});
const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo
