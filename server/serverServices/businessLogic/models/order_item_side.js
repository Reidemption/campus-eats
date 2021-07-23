const mongoose = require("mongoose");
const Meal = require("./meal");
const OrderItem = require("./order_item");
const MealSide = require("./meal_side");

const OrderItemSideSchema = mongoose.Schema({
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: OrderItem
    },
    orderDate: {
        type:Date,
        require: true
    },
    meal:Meal.MealSchema,
    sides: [MealSide.MealSideSchema],
    price:{
        type:Number,
        require:true
    }
},{timestamps:true});

const OrderItemSideModel = mongoose.model("OrderItemSide", OrderItemSideSchema);
module.exports = {OrderItemSideModel,OrderItemSideSchema}

