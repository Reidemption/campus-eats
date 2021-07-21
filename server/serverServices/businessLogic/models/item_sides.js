const mongoose = require("mongoose");
const Meal = require("./meal");
const OrderItem = require("./order_item");

const sideSchema = mongoose.Schema({
    side_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Order
    },
    orderDate: {
        type:Date,
        require: true
    },
    meal:{
        type:Meal
    },
    sides: [
        {
            type:SideDishes
        }
    ],
    price:{
        type:Number,
        require:true
    }
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);
module.exports = OrderItem

