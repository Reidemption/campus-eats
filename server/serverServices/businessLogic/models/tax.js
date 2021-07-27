const mongoose = require("mongoose");

const TaxSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please enter Tax's name"],
        default:""
    },
    percentage:{
        type:Number
    },
    restaurant_id:{        
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    }
},{timestamps:true});
const TaxModel = mongoose.model("Tax", TaxSchema);

module.exports = {TaxModel,TaxSchema}
