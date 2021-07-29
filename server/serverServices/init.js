require("dotenv").config();
const services = require("./services");
const authorization = require("./AuthServices");

const dataAccess = require("../dataAccess/DAO.js");

// define a port
const port = process.argv[2] || process.env.PORT || 7777;
const port2 = process.argv[2] || process.env.PORT || 9999;

dataAccess.connectToDb(() => {
  services.listen(port, () => {
    console.log(`-> The CAMPUSEATS services are running at port:${port}`);
  });
  services.listen(port2, () => {
    console.log(`-> The Auth services are running at port:${port2}`);
    console.log(`--------------------------------------------------`);
  });
});
