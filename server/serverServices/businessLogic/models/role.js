const mongoose = require("mongoose");
const Permission = require("./permission");

const RoleSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    permissions:[Permission]
},{timestamps:true});
const RoleModel = mongoose.model("Role", RoleSchema);

module.exports = {RoleModel,RoleSchema}
