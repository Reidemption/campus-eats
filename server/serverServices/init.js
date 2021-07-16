const services = require("./services");
<<<<<<< HEAD
const dataAccess = require("../dataAccessLayer/DAO");
=======
const { connectDB, database } = require("../dataAccessLayer/DAO");
>>>>>>> reid

// define a port
const port = process.argv[2] || process.env.port || 7777;

<<<<<<< HEAD
//TODO:WRAP THIS WITH PROMISE WRAPPER: https://www.npmjs.com/package/mysql2#using-promise-wrapper
dataAccess.connectDB(()=>{
    services.listen(port,()=>{
        console.log(`-> The CAMPUSEAT server is running at port:${port}`);
        console.log(`--------------------------------------------------`);
    });
=======
connectDB(() => {
  services.listen(port, () => {
    console.log(`-> The CAMPUSEAT server is running at port:${port}`);
    console.log(`--------------------------------------------------`);
  });
>>>>>>> reid
});
