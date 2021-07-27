const mongoose = require("mongoose");

const FeeSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please enter Fee's name"],
        default:""
    },
    amount:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
    }
},{timestamps:true});
const FeeModel = mongoose.model("Fee", FeeSchema);

module.exports = {FeeModel,FeeSchema}
