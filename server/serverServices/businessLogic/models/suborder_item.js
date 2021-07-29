const mongoose = require("mongoose");
const Meal = require("./meal");
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
    sides:[MealSide.MealSideSchema],
    note: String,
    price: {
        type: Number,
        default:function(){
            let subOrderItemPrice = 0
            Meal.MealModel.findOne(this.meal_id,(err,meal)=>{
                if(!err){
                    subOrderItemPrice += meal.price
                    if(this.sides.length>0){
                        this.sides.forEach(side => {
                            MealSide.MealModel.findOne(side._id,(err,sideobj)=>{
                                if(!err){
                                    subOrderItemPrice = subOrderItemPrice +sideobj.price;
                                }
                            })
                        });
                    }
                }
            })
            return subOrderItemPrice*this.quantity
        }
    }
},{timestamps:true});

const SubOrderItemModel = mongoose.model("SubOrderItem", SubOrderItemSchema);
module.exports = {SubOrderItemModel,SubOrderItemSchema}

