const services = require("./services");
const dataAccess = require("../dataAccessLayer/DAO");

// define a port
const port = process.argv[2] || process.env.port || 7777;

//TODO:WRAP THIS WITH PROMISE WRAPPER: https://www.npmjs.com/package/mysql2#using-promise-wrapper
dataAccess.connectDB(() => {
  services.listen(port, () => {
    console.log(`-> The CAMPUSEAT server is running at port:${port}`);
    console.log(`--------------------------------------------------`);
  });
});
