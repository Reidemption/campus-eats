const User = require("./user");
const UserInfo = require("./user_information");
const Order = require("./order");
const OrderItem = require("./order_item");
const OrderItemSide = require("./order_item_side");
const Menu = require("./menu");
const Meal = require("./meal");
const MealSide = require("./meal_side");
const Category = require("./category");
const Restaurant = require("./restaurant");
const RestaurantSideType = require("./restaurant_side_type.js");

module.exports={
    User, UserInfo,
    Order,OrderItem,OrderItemSide,
    Restaurant, Category,Menu, Meal, MealSide, RestaurantSideType
}