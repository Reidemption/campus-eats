const express = require("express");
const cors = require("cors");
const services = express();
const dataAccess = require("../dataAccessLayer/DAO");

// ========== Middlewares ===========
services.use(cors());
services.use(express.json({}));

// ======== Request handlers =========
// --- LOG ---
services.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  console.log("======================== REQUEST ==========================");
  console.log(
    "- Time:",
    Date.now(),
    "- Method:",
    req.method,
    "- Url:",
    req.url,
    "- Body:",
    req.body
  ),
    next();
});

services.get("/hello",(req,res)=>{
  res.status(200).json({})
})

//  Get Restaurant name
services.get("/restaurant/", (req, res) => {
  let sql = `SELECT * FROM restaurants`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.send(result);
  });
});

// ========= EXPORT MODULE ==========
module.exports = services;
