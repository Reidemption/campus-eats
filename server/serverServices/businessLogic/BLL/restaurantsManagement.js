const Restaurant = require("../models/restaurant")

function findRestaurantById(id){
    Restaurant.RestaurantModel.find({
        _id:id
    }, (err, restaurant) => {
        if (err) {
          return {error:err, result :null};
        }
        return {error:null, result :restaurant};
      });
}

function findRestaurantsByName(name){
    Restaurant.RestaurantModel.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, restaurants) => {
        if (err != null) {
          return {error:err, result :null};
        }
        return {error:null, result :restaurants};
    });
}
function findOneRestaurantsByName(name){
    Restaurant.RestaurantModel.findOne({
        name:`${name}`
    }, (err, restaurant) => {
        if (err != null) {
            return {error:err, result :null};
        }
        return {error:null, result :restaurant};
      });
}

function createRestaurant(restaurant_obj){
    //TODO: check if that restaurant name is existed?!?
    Restaurant.RestaurantModel.create(restaurant_obj, (err,restaurant)=>{
        if (err){
            console.log(`Couldn't create a restaurant with body ${req.body}`);
            return{
                error:err,
                result:null
            }
        };
        return{
            error:null,
            result:restaurant
        }
    });
}

function updateRestaurant(restaurant_obj){
    Restaurant.RestaurantModel.findByIdAndUpdate(restaurant_obj._id,restaurant_obj, (err,restaurant)=>{
        if (err){
            console.log(`Couldn't update a restaurant with body ${restaurant_obj}`);
            return{
                error:err,
                result:null
            }
        };
        return{
            error:null,
            result:restaurant
        }
    });
}


function deleteRestaurant(restaurant_id){
    Restaurant.RestaurantModel.findByIdAndDelete(restaurant_id, (err,restaurant)=>{
        if (err){
            console.log(`Couldn't delete a restaurant with id ${restaurant_id}`);
            return{
                error:err,
                result:null
            }
        };
        return{
            error:null,
            result:restaurant
        }
    });
}

module.exports={
    findRestaurantById,
    findOneRestaurantsByName,
    findRestaurantsByName,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}