const mongoose = require("mongoose");
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
        type:Array,
        require: true
    },
});

const Order = mongoose.model("Order", orderSchema);
