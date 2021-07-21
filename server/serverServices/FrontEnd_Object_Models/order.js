const mongoose = require("mongoose");
const order_detail = require("./order_detail");
const orderSchema = mongoose.Schema({
    id: {
        type:String,
        require: true
    },
    user_id: {
        type:String,
        require: true
    },
    orderDate: {
        type:Date,
        require: true
    },
    items: {
        type: order_detail,
        require: true
    },
});

const Order = mongoose.model("Order", orderSchema);
