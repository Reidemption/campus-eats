const mongoose = require("mongoose");
const Meal = require("./meal");
const Order = require("./order");
const Restaurant = require("./restaurant")
const OrderItemSide = require("./order_item_side")

const orderItemSchema = mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Order
    },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Restaurant
    },
    orderTime: {
        type:Date,
        require: true
    },
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    isDone:{
        type:Boolean,
        default:false
    },
    isPickedUp:{
        type:Boolean,
        default:false
    },
    deliverer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    isDelivered:{
        type:Boolean,
        default:false
    },
    meal:{
        type:Meal
    },
    sides: [
        {
            quantity:Number,
            item: OrderItemSide
        }
    ],
    note:{
        type:String
    },
    price:{
        type:Number,
        require:true
    }
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);
module.exports = OrderItem

