const User = require("../models/user")

function getAllUsers(callback){
    User.UserModel.find({}, (err, users) => {
        if (err){
            console.log(`Couldn't find any user.`);
        }else{
            console.log(`Successfully found users.`);
        }
        callback(err, users)
    });
}

function findUserById(user_id,callback){
    User.UserModel.findById(user_id, (err, user) => {
        if (err){
            console.log(`Couldn't find a user with id: ${user_id}`);
        }else{
            console.log(user);
            console.log(`Successfully found user with id: ${user_id}`);
        }
        callback(err, user)
    });
}

function findUsersByName(name,callback){
    Users.UserModel.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, users) => {
        if (err){
            console.log(`Couldn't find a user with name ${name}`);
        }else{
            console.log(`Successfully found user with name ${name}`);
        }
        callback(err, users)
    });
}

function findAUserByName(name,callback){
    Users.UserModel.findOne({
        name:`${name}`
    }, (err, user) => {
        callback(err, user)
    });
}

function createUser(user_obj,callback){
    //TODO: check if that user name is existed?!?
    User.UserModel.create(user_obj, (err,user)=>{
        if (err){
            console.log(`Couldn't create a user with body ${user_obj}`);
        }else{
            console.log(`Successfully create user with body ${user_obj}`);
        }
        callback(err, user)
    });
}

function updateUser(user_obj,callback){
    User.UserModel.findByIdAndUpdate(user_obj._id,user_obj, (err,user)=>{
        if (err){
            console.log(`Couldn't update a user with body ${user_obj}`);
        }else{
            
            console.log(`Successfully updated a user with body ${user_obj}`);
        }
        callback(err, user)
    });
}

function deleteUser(id,callback){
    User.UserModel.findByIdAndDelete(id, (err,user)=>{
        if (err){
            console.log(`Couldn't delete a user with id ${id}`);
        }else{
            
            console.log(`Successfully delete a user with id ${id}`);
        }
        callback(err, user)
    });
}

module.exports={
    getAllUsers,
    findUserById,findAUserByName,findUsersByName,
    createUser,updateUser,deleteUser
}
