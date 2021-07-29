const mongoose = require("mongoose");
const Permission = require("./permission");

const RoleSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please enter Role's name"],
        default:""
    },
    permissions:[Permission.PermissionSchema]
},{timestamps:true});
const RoleModel = mongoose.model("Role", RoleSchema);

module.exports = {RoleModel,RoleSchema}
