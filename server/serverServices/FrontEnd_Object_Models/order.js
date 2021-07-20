const mongoose = require("mongoose");
const User = require("./user")

const orderSchema = new mongoose.Schema({
    order_id:{
        type:String,
        require:true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    deliverer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    destination:{
        type:String,
        require:true
    },
    orderTime: {
        type:Date,
        require:true
    },
    total:{
        type:Double,
        require:true
    }
});
const Order = mongoose.model("Order", orderSchema);

module.exports = Order