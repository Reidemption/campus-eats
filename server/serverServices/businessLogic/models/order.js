const mongoose = require("mongoose");
const User = require("./user")
const OrderItem = require("./order_item")

const orderSchema = new mongoose.Schema({
    order_id:{
        type:String,
        require:true
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    destination:{
        type:String,
        require:true
    },
    order_time: {
        type:Date,
        require:true
    },
    lastPickup: {
        type:Date,
        require:true
    },
    isPickedUp:{
        type:Boolean,
        default:false
    },
    DeliveryTime: {
        type:Date,
        require:true
    },
    isDelivered:{
        type:Boolean,
        default:false
    },
    items:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: OrderItem
        }
    ],
    paid_by_meal_plan:{
        type:Boolean,
        default:true
    },
    total_Price:{
        type:Number,
        require:true
    },
    tax:{
        type:Number,
        require:function(){
            return this.paid_by_meal_plan;
        }
    },
    final_Price:{
        type:Number
    }
});
const Order = mongoose.model("Order", orderSchema);

module.exports = Order
