const User = require("../models/user")

function getAllUsers(){
    User.UserModel.find({}, (err, users) => {
        if (err != null) {
          return {error:err, result :null};
        }
        return {error:null, result :users};
      });
}

function findUsertById(id){
    User.UserModel.find({
        _id:id
    }, (err, user) => {
        if (err != null) {
          return {error:err, result :null};
        }
        return {error:null, result :user};
      });
}

function findUsersByName(name){
    Users.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, users) => {
        if (err != null) {
          res.status(500).json({
            err: error,
            message: "unable to list all users",
          });
          return {error:err, result :null};
        }
        return {error:null, result :users};
      });
}
function findOneUsersByName(name){
    Users.findOne({
        name:`${name}`
    }, (err, user) => {
        if (err != null) {
            return {error:err, result :null};
        }
        return {error:null, result :user};
      });
}

function createUser(user_obj){
    //TODO: check if that user name is existed?!?
    User.create(user_obj, (err,user)=>{
        if (err){
            console.log(`Couldn't create a user with body ${req.body}`);
            return{
                error:err,
                result:null
            }
        };
        return{
            error:null,
            result:user
        }
    });
}

function updateUser(user_obj){
    User.findByIdAndUpdate(user_obj._id,user_obj, (err,user)=>{
        if (err){
            console.log(`Couldn't update a user with body ${user_obj}`);
            return{
                error:err,
                result:null
            }
        };
        return{
            error:null,
            result:user
        }
    });
}


function deleteUser(user_id){
    User.findByIdAndDelete(user_id, (err,user)=>{
        if (err){
            console.log(`Couldn't delete a user with id ${user_id}`);
            return{
                error:err,
                result:null
            }
        };
        return{
            error:null,
            result:user
        }
    });
}

module.exports={
    getAllUsers,
    findUsertById,findOneUsersByName,findUsersByName,
    createUser,updateUser,deleteUser
}