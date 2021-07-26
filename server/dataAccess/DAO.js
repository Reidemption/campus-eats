const mongoose = require("mongoose");
const Role = require("../serverServices/businessLogic/BLL/roleManagement");
const db = mongoose.connection;

function connectToDb(callback) {
  let connectionString =
    "mongodb+srv://reid_gubler:AHg0i8fGhb8Gh8va@cluster0.tmhn8.mongodb.net/campus_eats?retryWrites=true&w=majority";
  mongoose
    .connect(connectionString, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(`-------------------- ERROR ---------------------`);
      console.log(`- ${Date.now()} - Cannot connect to the Database`);
      console.log(`- Connection String: ${connectionString}`);
      console.log(`--- Error: ${err}`);
      console.log(`------------------------------------------------`);
      process.exit();
    });
  db.once("open", function(){
    console.log("> Init <super admin> role!")
    Role.init(null);
    callback();
  });
}

module.exports = {
  connectToDb,
};
