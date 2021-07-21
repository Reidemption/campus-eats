const mongoose = require("mongoose");
const Meal = require("./meal");
const OrderItem = require("./order_item");

const itemSideSchema = mongoose.Schema({
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: OrderItem
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

const OrderItemSide = mongoose.model("OrderItemSide", itemSideSchema);
module.exports = OrderItemSide

