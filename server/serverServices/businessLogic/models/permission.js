const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    }
},{timestamps:true});
const PermissionModel = mongoose.model("Permission", PermissionSchema);

module.exports = {PermissionModel,PermissionSchema}
