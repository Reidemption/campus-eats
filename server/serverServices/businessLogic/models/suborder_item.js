const mongoose = require("mongoose");
const Meal = require("./meal");
const MealSide = require("./meal_side");

const SubOrderItemSchema = mongoose.Schema({
    sub_order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubOrder"
    },
    quantity: Number,
    meal:Meal.MealSchema,
    sides:[MealSide.MealSideSchema],
    note: String,
    price: {
        type: Number,
        default:function(){
            SubOrderItemModel
        }
    }
},{timestamps:true});

const SubOrderItemModel = mongoose.model("SubOrderItem", SubOrderItemSchema);
module.exports = {SubOrderItemModel,SubOrderItemSchema}

