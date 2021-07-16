const services = require("./services");
const connectDBX = require("../dataAccessLayer/DAO");

// define a port
const port =process.argv[2]||process.env.port||7777;

connectDBX(()=>{
    console.log("-> Succesfully connect to DB");
    services.listen(port,()=>{
        console.log(`-> The CAMPUSEAT server is running at port:${port}`);
        console.log(`--------------------------------------------------`);
    });
});

