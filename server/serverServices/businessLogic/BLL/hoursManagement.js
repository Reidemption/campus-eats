const Hour = require("../models/hour")

function findHoursByName(name){
    Hours.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, hours) => {
        if (err != null) {
          res.status(500).json({
            err: error,
            message: "unable to list all hours",
          });
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :hours};
      });
}
function findOneHoursByName(name){
    Hours.findOne({
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
    Hour.create(hour_obj, (err,hour)=>{
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
    Hour.findByIdAndUpdate(hour_obj._id,hour_obj, (err,hour)=>{
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
    Hour.findByIdAndDelete(hour_id, (err,hour)=>{
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
    findOneHoursByName,
    findHoursByName,
    createHour,
    updateHour,
    deleteHour
}