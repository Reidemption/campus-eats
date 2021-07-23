const mongoose = require("mongoose");
const User = require("./user")
const OrderItem = require("./order_item")

const OrderSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    order_time: {
        type:Date,
        require:true
    },
    lastPickup: {
        type:Date,
        require:true
    },
    lastPickup: {
        type:Date,
        require:true
    },
    DeliveryTime: {
        type:Date,
        require:true
    },
    isCompletelyDelivered:{
        type:Boolean,
        default:false
    },
    destination:{
        type:String,
        require:true
    },
    order_items:[OrderItem.OrderItemSchema],
    paid_by_meal_plan:{
        type:Boolean,
        default:true
    },
    total_Price:{
        type:Number,
        require:true
    },
    is_paid_by_meal_plan:{
        type:Boolean,
        require:true,
        default:true
    },
    tax:{
        type:Number,
        require:function(){
            return this.is_paid_by_meal_plan;
        }
    },
    final_Price:{
        type:Number
    }
},{timestamps:true});
const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = {OrderModel,OrderSchema}
