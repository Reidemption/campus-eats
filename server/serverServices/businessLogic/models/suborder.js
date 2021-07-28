const mongoose = require("mongoose");
const SubOrderItem = require("./suborder_item");

const SubOrderSchema = mongoose.Schema({
    super_order_id: {
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
    items:[   SubOrderItem.SubOrderItemSchema ],
    total_price:{
        type:Number
    }
},{timestamps:true});

const SubOrderModel = mongoose.model("SubOrder", SubOrderSchema);
module.exports = {SubOrderModel,SubOrderSchema}

