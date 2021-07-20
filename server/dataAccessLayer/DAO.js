const mongoose = require("mongoose")

function connectToDb(callback){
    let connectionString="mongodb+srv://duy:P@ssw0rd@duydb.6mffl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    mongoose.connect(connectionString,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).catch(err=>{
        if(err){
            console.log(`-------------------- ERROR ---------------------`)
            console.log(`- ${Date.now()} - Cannot connect to the Database`)
            console.log(`--- Error: ${err}`)            
            console.log(`------------------------------------------------`)
        }
    });
    mongoose.connection.once("open",callback);
}

module.exports = {
    connectToDb
}