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
// mongoose.set("useFindAndModify", false);
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
      console.log(restaurant);
      res.status(201).json(restaurant);
    }
  );
});

// POST/create categories for a specific restaurant
services.post("/category", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a category with a body ${req.body}`);

  if (!req.body.name || !req.body.restaurant_id) {
    console.log(`unable to create category because fields are missing`);
    res.status(400).json({
      message: "unable to create category",
      error: "field is missing",
    });
    return;
  }
  let newCategory = {
    name: req.body.name,
    restaurant_id: req.body.restaurant_id,
  };

  Restaurants.findByIdAndUpdate(
    req.body.restaurant_id,
    { $push: { categories: newCategory } },
    (err, restaurant) => {
      if (err) {
        console.log(`unable to create category`);
        res.status(500).json({
          message: "unable to create category",
          error: err,
        });
        return;
      } else if (restaurant === null) {
        console.log(
          "Unable to find restaurant with id:",
          req.body.restaurant_id
        );

        res.status(404).json({
          message: "Unable to find restaurant",
          error: err,
        });
      }
      console.log(restaurant.categories);
      res
        .status(201)
        .json(restaurant.categories[restaurant.categories.length - 1]);
    }
  );
});

// POST/create menu for a specific category
services.post("/menu", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a menu with a body ${req.body}`);
  console.log(`${req.body.category_id}`);

  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.price ||
    !req.body.category_id ||
    !req.body.restaurant_id
  ) {
    console.log(`unable to create menu because fields are missing`);
    res.status(400).json({
      message: "unable to create menu",
      error: "field is missing",
    });
    return;
  }
  let newMenu = {
    name: req.body.name,
    image_url: req.body.image_url,
    description: req.body.description,
    calories: req.body.calories,
    price: req.body.price,
    category_id: req.body.category_id,
    restaurant_id: req.body.restaurant_id,
  };
  Restaurants.findById(
    req.body.restaurant_id,
    // { $push: { menu: newMenu } },
    (err, restaurant) => {
      console.log(req.body.restaurant_id);
      if (err) {
        console.log(`unable to create menu`);
        res.status(500).json({
          message: "unable to create menu",
          error: err,
        });
        return;
      } else if (restaurant === null) {
        console.log(`${restaurant} N0LL`);
        console.log(
          `Unable to find restaurant with id: ${req.body.restaurant_id}`
        );

        res.status(404).json({
          message: "Unable to find restaurant",
          error: err,
        });
      } else {
        console.log("restaurant id is valid");

        // the restaurant is valid, now you need to update its stuff
        // because category is a list we need to find the right one
        console.log(restaurant.categories);
        restaurant.categories.forEach((category) => {
          if (category._id === req.body.category_id) {
            category.menu.push(newMenu);
          }
        });
        // okay so now we have to go tell the database about our change

        Restaurants.replaceOne(
          req.body.restaurant_id,
          restaurant,
          {},
          (err) => {
            if (err) {
              console.log("Error replacing restaurant in DB:", err);
            } else {
              console.log("Successfully replaced restaurant in DB.");
            }
          }
        ),
          console.log(`${restaurant} Success`);
        res.status(201).json(restaurant.categories.menu);
      }
    }
  );
});

// ========= EXPORT MODULE ==========
module.exports = services;
