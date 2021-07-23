const Hour = require("../models/hour")

function findHourById(id){
    Hour.HourModel.find({
        _id:id
    }, (err, hour) => {
        if (err != null) {
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :hour};
      });
}
function findHoursByName(name){
    Hour.HourModel.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, hours) => {
        if (err != null) {
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :hours};
      });
}
function findOneHoursByName(name){
    Hour.HourModel.findOne({
        name:`${name}`
    }, (err, hour) => {
        if (err != null) {
            return {Error:err, result :undefined};
        }
        return {Error:undefined, result :hour};
      });
}

function createHour(hour_obj){
    //TODO: check if that hour name is existed?!?
    Hour.HourModel.create(hour_obj, (err,hour)=>{
        if (err){
            console.log(`Couldn't create a hour with body ${req.body}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:hour
        }
    });
}

function updateHour(hour_obj){
    Hour.HourModel.findByIdAndUpdate(hour_obj._id,hour_obj, (err,hour)=>{
        if (err){
            console.log(`Couldn't update a hour with body ${hour_obj}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:hour
        }
    });
}


function deleteHour(hour_id){
    Hour.HourModel.findByIdAndDelete(hour_id, (err,hour)=>{
        if (err){
            console.log(`Couldn't delete a hour with id ${hour_id}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:hour
        }
    });
}

module.exports={
    findHourById,
    findOneHoursByName,
    findHoursByName,
    createHour,
    updateHour,
    deleteHour
}