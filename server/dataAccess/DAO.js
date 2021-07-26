const mongoose = require("mongoose");
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
      console.log(`--- Error: ${err}`);
      console.log(`------------------------------------------------`);
    });
  db.once("open", callback);
}

module.exports = {
  connectToDb,
};
