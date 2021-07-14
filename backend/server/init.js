const server = require("./services");
const dataAccess = require("../dataAccessLayer/DAO");

// define a port
const port =process.argv[2]||process.env.port||7777;

dataAccess.connectDB(()=>{
    console.log("-> Succesfully connect to DB");
    server.service.listen(port,()=>{
        console.log(`-> The CAMPUSEAT server is running at port:${port}`);
        console.log(`--------------------------------------------------`);
    });
});