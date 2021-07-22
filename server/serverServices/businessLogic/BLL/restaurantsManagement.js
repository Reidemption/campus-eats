const Restaurant = require("../models/restaurant")

function findRestaurantsByName(name){
    Restaurants.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, restaurants) => {
        if (err != null) {
          res.status(500).json({
            err: error,
            message: "unable to list all restaurants",
          });
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :restaurants};
      });
}
function findOneRestaurantsByName(name){
    Restaurants.findOne({
        name:`${name}`
    }, (err, restaurant) => {
        if (err != null) {
            return {Error:err, result :undefined};
        }
        return {Error:undefined, result :restaurant};
      });
}

function createRestaurant(restaurant_obj){
    //TODO: check if that restaurant name is existed?!?
    Restaurant.create(restaurant_obj, (err,restaurant)=>{
        if (err){
            console.log(`Couldn't create a restaurant with body ${req.body}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:restaurant
        }
    });
}

function updateRestaurant(restaurant_obj){
    Restaurant.findByIdAndUpdate(restaurant_obj._id,restaurant_obj, (err,restaurant)=>{
        if (err){
            console.log(`Couldn't update a restaurant with body ${restaurant_obj}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:restaurant
        }
    });
}


function deleteRestaurant(restaurant_id){
    Restaurant.findByIdAndDelete(restaurant_id, (err,restaurant)=>{
        if (err){
            console.log(`Couldn't delete a restaurant with id ${restaurant_id}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:restaurant
        }
    });
}

module.exports={
    findOneRestaurantsByName,
    findRestaurantsByName,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}