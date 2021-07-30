const mongoose = require("mongoose");
const Meal = require("./meal");
// const {Meal,MealSide} = require("../../FrontEnd_Object_Models/restaurant");
const MealSide = require("./meal_side");

const SubOrderItemSchema = mongoose.Schema({
    sub_order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubOrder"
    },
    quantity: Number,
    meal_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal"
    },
    meal_name:String,
    sides:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MealSide"
    }],
    note: String,
    price: {
        type: Number,
        default:0
    }
},{timestamps:true});
SubOrderItemSchema.virtual("calculated_price").get(function(){
    let subOrderItemPrice = 0
    Meal.MealModel.findOne(this.meal_id,(err,meal)=>{
        if(err===null && meal!=null){
            subOrderItemPrice += meal.price
            if(this.sides.length>0){
                this.sides.forEach(side => {
                    MealSide.MealModel.findOne(side._id,(err,sideobj)=>{
                        if(err === nul && sideobj!=null){
                            subOrderItemPrice = subOrderItemPrice +sideobj.price;
                        }
                    })
                });
            }
        }
    })
    return subOrderItemPrice*this.quantity
})
const SubOrderItemModel = mongoose.model("SubOrderItem", SubOrderItemSchema);
module.exports = {SubOrderItemModel,SubOrderItemSchema}

