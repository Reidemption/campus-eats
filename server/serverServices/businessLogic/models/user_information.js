const mongoose = require("mongoose");
const Role = require("./role");

const UserInfoSchema = new mongoose.Schema({    
    role:{
        type:Role.RoleSchema,
        default:null
    },
    dnumber: {
        type:String,
        required:[true,"Please enter your Dnumber"] 
    },
    firstname: {
        type:String,
        required:[true,"Please enter your first name"]
    },
    lastname: {
        type:String,
        required:[true,"Please enter your last name"]
    },
    contacts:{
        address:{
            type: String,
            default:""
        },
        phone:{
            type: String,
            required:[true,"Please enter your phone number"]
        },
        email:{
            type: String,
            default:""
        }
    },
    order_history:[],
    delivery_history:[],
},{timestamps:true});
const UserInfoModel = mongoose.model("UserInfo", UserInfoSchema);

module.exports = { UserInfoModel, UserInfoSchema };
