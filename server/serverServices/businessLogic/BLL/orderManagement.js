const Order = require("../models/order")

function findOrdersById(id){
    Order.OrderModel.find({
        _id:id
    }, (err, order) => {
        if (err != null) {
          res.status(500).json({
            err: error,
            message: "unable to list all orders",
          });
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :order};
      });
}

function findOrdersByName(name){
    Order.OrderModel.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, orders) => {
        if (err != null) {
          res.status(500).json({
            err: error,
            message: "unable to list all orders",
          });
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :orders};
      });
}
function findOneOrdersByName(name){
    Order.OrderModel.findOne({
        name:`${name}`
    }, (err, order) => {
        if (err != null) {
            return {Error:err, result :undefined};
        }
        return {Error:undefined, result :order};
    });
}

function createOrder(order_obj){
    //TODO: check if that order name is existed?!?
    Order.OrderModel.create(order_obj, (err,order)=>{
        if (err){
            console.log(`Couldn't create a order with body ${req.body}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:order
        }
    });
}

function updateOrder(order_obj){
    Order.OrderModel.findByIdAndUpdate(order_obj._id,order_obj, (err,order)=>{
        if (err){
            console.log(`Couldn't update a order with body ${order_obj}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:order
        }
    });
}


function deleteOrder(order_id){
    Order.OrderModel.findByIdAndDelete(order_id, (err,order)=>{
        if (err){
            console.log(`Couldn't delete a order with id ${order_id}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:order
        }
    });
}

module.exports={
    findOrdersById,
    findOneOrdersByName,
    findOrdersByName,
    createOrder,
    updateOrder,
    deleteOrder
}