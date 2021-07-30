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
    items:[  SubOrderItem.SubOrderItemSchema ],
    total_price:{
        type: Number,
        default:0
    }
},{timestamps:true, 
    toJSON:{virtuals:true}
});
SubOrderSchema.virtual("calculated_price").get(function(){
    let suborderPrice = 0;
    this.items.forEach(subOrderItem => {
        suborderPrice = suborderPrice+ subOrderItem.price
    });
    return suborderPrice
})
const SubOrderModel = mongoose.model("calcualated_price", SubOrderSchema);
module.exports = {SubOrderModel,SubOrderSchema}

