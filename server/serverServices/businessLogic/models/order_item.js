const mongoose = require("mongoose");
const Meal = require("./meal");
const Order = require("./order");
const Restaurant = require("./restaurant")

const OrderItemSchema = mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    },
    orderTime: {
        type:Date,
        require: true
    },
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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
        ref: "User"
    },
    isDelivered:{
        type:Boolean,
        default:false
    },
    items:[Meal.MealSchema],
    total_price:{
        type:Number
    }
},{timestamps:true});

const OrderItemModel = mongoose.model("OrderItem", OrderItemSchema);
module.exports = {OrderItemModel,OrderItemSchema}

