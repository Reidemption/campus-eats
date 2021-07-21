const express = require("express");
const cors = require("cors");
const {
  Restaurants,
  Categories,
  Menus,
  Customizations,
} = require("./FrontEnd_Object_Models/restaurant.js");
const services = express();
const dataAccess = require("../dataAccess/DAO");
// const model = require("./FrontEnd_Object_Models/frontendModel");

// ========== Middlewares ===========
services.use(cors());
services.use(express.json({}));

// ======== Request handlers =========
// --- LOG ---
services.use((req, res, next) => {
  res.setHeader("Content-Type", "serviceslication/json");
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
  res.setHeader("Content-Type", "serviceslication/json");
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
services.get("/feed/:id", (req, res) => {
  res.setHeader("Content-Type", "serviceslication/json");
  console.log(`Getting specific restaurant with id:${req.params.id}`);
  Restaurants.findById(req.params.id, (err, restaurants) => {
    if (err != null) {
      res.status(500).json({
        err: err,
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

// POST/create restaurant
services.post("/restaurant", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a restaurant with a body ${req.body}`);
  if (
    !req.body.path ||
    !req.body.name ||
    !req.body.logo ||
    !req.body.background_image ||
    !req.body.description ||
    !req.body.location
  ) {
    console.log(`unable to create restaurant because fields are missing`);
    res.status(400).json({
      message: "unable to create restaurant",
      error: "field is missing",
    });
    return;
  }
  Restaurants.create(
    {
      path: req.body.path,
      name: req.body.name,
      logo: req.body.logo,
      background_image: req.body.background_image,
      description: req.body.description,
      location: req.body.location,
    },
    (err, restaurant) => {
      if (err) {
        console.log(`unable to create restaurant`);
        res.status(400).json({
          message: "unable to create restaurant",
          error: err,
        });
        return;
      }
      res.status(201).json(restaurant);
    }
  );
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
