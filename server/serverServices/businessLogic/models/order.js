const mongoose = require("mongoose");
const SubOrder = require("./suborder")

const OrderSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    isCompletelyDelivered:{
        type:Boolean,
        default:false
    },
    destination:{
        type:String,
        // require:true
    },
    suborders:[SubOrder.SubOrderSchema],
    paid_by_meal_plan:{
        type:Boolean,
        default:true
    },
    total_Price:{
        type:Number,
        required:true
    },
    is_paid_by_meal_plan:{
        type:Boolean,
        required:true,
        default:true
    },
    tax:{
        type:Number,
        required:true,
        default:0
    },
    fee:{
        type:Number,
        required:true,
        default:0
    },
    final_Price:{
        type:Number,
        default:function(){
            return (this.total_Price+this.total_Price*tax+fee)
        }
    },
    isVoided:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true});
const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = {OrderModel,OrderSchema}
