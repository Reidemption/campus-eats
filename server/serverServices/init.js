const services = require("./services");
const dataAccess = require("../dataAccess/DAO.js");

// define a port
const port = process.argv[2] || process.env.port || 7777;

dataAccess.connectToDb(() => {
  services.listen(port, () => {
    console.log(`-> The CAMPUSEATS server is running at port:${port}`);
    console.log(`--------------------------------------------------`);
  });
});
