const Order = require("../models/order");
const SubOrder = require("../models/suborder");
const SubOrderItem = require("../models/suborder_item");

function getAllOrders(userId=null,callback) {
  if(userId===null){
    Order.OrderModel.find({}, (err, orders) => {
      if (err) {
        console.log(`Couldn't find any order.`);
      } else {
        console.log(`Successfully found orders.`);
      }
      callback(err, orders);
    });
  }else{
    Order.OrderModel.find({
      "customer_id":userId
    }, (err, orders) => {
      if (err) {
        console.log(`Couldn't find any order.`);
      } else {
        console.log(`Successfully found orders.`);
      }
      callback(err, orders);
    });
  }
}

function findOrderById(order_id, callback) {
  Order.OrderModel.findById(order_id, (err, order) => {
    if (err) {
      console.log(`Couldn't find a order with id: ${order_id}`);
    } else {
      console.log(order);
      console.log(`Successfully found order with id: ${order_id}`);
    }
    callback(err, order);
  });
}

function findSubOrderById(order_id, callback) {
  OrderItem.OrderItemModel.findById(order_id, (err, order) => {
    if (err) {
      console.log(`Couldn't find a order with id: ${order_id}`);
    } else {
      console.log(order);
      console.log(`Successfully found order with id: ${order_id}`);
    }
    callback(err, order);
  });
}

async function createSubOrderItem(suborder_item_obj, callback) {
  SubOrderItem.SubOrderItemModel.create(suborder_item_obj, (err, order) => {
    if (err) {
      console.log(`Couldn't create a suborder item with body ${suborder_item_obj}`);
    } else {
      console.log(`Successfully create suborder item with body ${suborder_item_obj}`);
    }
    callback(err, order);
  });
}

async function createSubOrder(suborder_obj, callback) {
  SubOrder.SubOrderModel.create(suborder_obj, (err, order) => {
    if (err) {
      console.log(`Couldn't create a suborder with body ${suborder_obj}`);
    } else {
      console.log(`Successfully create suborder with body ${suborder_obj}`);
    }
    callback(err, order);
  });
}

async function createOrder(order_obj, callback) {
  //start Transaction:
  Order.OrderModel.create(order_obj, (err, order) => {
    if (err) {
      console.log(`Couldn't create a order with body ${order_obj}`);
    } else {
      console.log(`Successfully create order with body ${order_obj}`);
    }
    callback(err, order);
  });
  //end transaction
}

function updateOrder(sub_order_obj, callback) {
  Order.OrderModel.findByIdAndUpdate(order_obj._id, order_obj, (err, order) => {
    if (err) {
      console.log(`Couldn't update a order with body ${order_obj}`);
    } else {
      console.log(`Successfully updated a order with body ${order_obj}`);
    }
    callback(err, order);
  });
}

function deleteOrder(id, callback) {
  Order.OrderModel.findByIdAndDelete(id, (err, order) => {
    if (err) {
      console.log(`Couldn't delete a order with id ${id}`);
    } else {
      console.log(`Successfully delete a order with id ${id}`);
    }
    callback(err, order);
  });
}

module.exports = {
  getAllOrders,
  findSubOrderById,
  findOrderById,
  createOrder,createSubOrder,createSubOrderItem,
  updateOrder,
  deleteOrder,
};
