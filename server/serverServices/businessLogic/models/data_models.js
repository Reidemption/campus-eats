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
const SideType = require("./side_type");

const UserInfoModel=UserInfo.UserInfoModel;
const UserModel= User.UserModel;

const OrderModel = Order.OrderModel;
const OrderItemModel = OrderItem.OrderItemModel;
const OrderItemSideModel = OrderItemSide.OrderItemSideModel;

const MenuModel = Menu.MenuModel;
const MealModel = Meal.MealModel;
const MealSideModel = MealSide.MealSideModel;

const CategoryModel = Category.CategoryModel;
const RestaurantModel = Restaurant.RestaurantModel;
const SideTypeModel = SideType.SideTypeModel;

module.exports={
    UserInfoModel,UserModel,
    OrderModel,OrderItemModel,OrderItemSideModel,
    RestaurantModel,CategoryModel,MenuModel,MealModel,MealSideModel,SideTypeModel
}