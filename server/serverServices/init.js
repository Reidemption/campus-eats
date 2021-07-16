const services = require("./services");
const {connectDB,database} = require("../dataAccessLayer/DAO");

// define a port
const port =process.argv[2]||process.env.port||7777;

connectDB(()=>{
    services.listen(port,()=>{
        console.log(`-> The CAMPUSEAT server is running at port:${port}`);
        console.log(`--------------------------------------------------`);
    });
});

