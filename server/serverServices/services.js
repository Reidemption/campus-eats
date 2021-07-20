const express = require("express");
const cors = require("cors");
const {
  Restaurants,
  Categories,
  Menus,
  Customizations,
} = require("./FrontEnd_Object_Models/restaurant.js");
const services = express();
const dataAccess = require("./DAO");

// ========== Middlewares ===========
services.use(cors());
services.use(express.json({}));
services.use(express.static(".../fontend"));

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
    req.originalUrl,
    "- Body:",
    req.body
  ),
    next();
});
// ========== MIDDLEWARES ===========
// Get every restaurant
services.get("/feed", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(`return all Restaurants`);
  Restaurants.find({}, (err, restaurants) => {
    if (err != null) {
      res.status(500).json({
        err: error,
        message: "unable to list all restaurants",
      });
      return;
    }
    res.status(200).json(restaurants);
  });
});

// Get info for a restaurant with specific ID
app.get("/feed/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(`Getting specific restaurant with id:${req.params.id}`);
  Thread.findById(req.params.id, (err, restaurants) => {
    if (err != null) {
      res.status(500).json({
        err: error,
        message: "Unable to find restaurant with that id",
      });
      return;
    } else if (restaurants === null) {
      res
        .status(404)
        .json({ message: `unable to find restaurants`, error: err });
      return;
    }
    res.status(200).json(restaurants);
  });
});

// ========= ERROR HANDLER ==========
services.use((req, res, next) => {
  if (req.headers.error != undefined) {
    console.log(`-------------------- ERROR ---------------------`);
    console.log(`- ${Date.now()} - Cannot connect to Mysql`);
    console.log(`--- Error: ${err}`);
    console.log(`------------------------------------------------`);
  }
  next();
});
// ========= EXPORT MODULE ==========
module.exports = services;
