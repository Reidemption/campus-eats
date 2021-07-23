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

// POST/create category??
services.post("/categoryyy", function (req, res) {
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
  Categories.create(
    {
      name: req.body.name,
      restaurant_id: req.body.restaurant_id,
    },
    (err, category) => {
      if (err) {
        console.log(`unable to create category`);
        res.status(400).json({
          message: "unable to create category",
          error: err,
        });
        return;
      }
      console.log(category);
      res.status(201).json(category);
    }
  );
});

// POST/create categories for a specific restaurant
services.post("/category", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a category with a body`);
  console.log(req.body);
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
    { new: true },
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

//
// POST/create menu for a specific category
services.post("/menu", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a menu with a body:`);

  if (
    !req.body.name ||
    !req.body.restaurant_id ||
    !req.body.price ||
    !req.body.description ||
    !req.body.category_id
  ) {
    console.log(`unable to create menu because fields are missing`);
    res.status(400).json({
      message: "unable to create menu error 400",
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

  Restaurants.findOneAndUpdate(
    {
      _id: req.body.restaurant_id,
      "categories._id": req.body.category_id,
    },
    { $push: { "categories.$.menus": newMenu } },
    { new: true },
    (err, restaurant) => {
      console.log(`=>restaurant: ${restaurant}`);
      if (err) {
        console.log(`unable to create menu error 500`);
        res.status(500).json({
          message: "unable to create menu",
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
      // console.log(`Contents of menu:${restaurant.categories.menus}`);
      res.status(201).json(restaurant);
    }
  );
});

// POST/create customizations for a specific category
services.post("/customization", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a customization with a body:`);
  console.log(req.body);

  if (!req.body.type) {
    console.log("no type");
  } else if (!req.body.name) {
    console.log("no name");
  } else if (!req.body.price) {
    console.log("no price");
  } else if (!req.body.selected) {
    console.log("no selected");
  } else if (!req.body.menu_id) {
    console.log("not menu_id");
  } else if (!req.body.category_id) {
    console.log("not category_id");
  } else if (!req.body.restaurant_id) {
    console.log("no restaurant_id");
  } else {
    console.log(`unable to create customization because fields are missing`);
    res.status(400).json({
      message: "unable to create customization error 400",
      error: "field(s) is missing",
    });
    return;
  }
  let newCustomization = {
    type: req.body.type,
    name: req.body.name,
    calories: req.body.calories,
    price: req.body.price,
    selected: req.body.selected,
    menu_id: req.body.menu_id,
    category_id: req.body.category_id,
    restaurant_id: req.body.restaurant_id,
  };

  Restaurants.findOneAndUpdate(
    {
      _id: req.body.restaurant_id,
      "categories._id": req.body.category_id,
      "categories.menus._id": req.body.menu_id,
    },
    // {},
    {
      $push: {
        "categories.$[outer].menus.$[inner].custom_options": newCustomization,
      },
    },
    {
      new: true,
      arrayFilters: [
        { "outer._id": req.body.category_id },
        { "inner._id": req.body.menu_id },
      ],
    },
    (err, restaurant) => {
      console.log(`=>restaurant: ${restaurant}`);
      if (err) {
        console.log(`unable to create custom option error 500`);
        res.status(500).json({
          message: "unable to create custom option",
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
        return;
      }
      // console.log(`Contents of menu:${restaurant.categories.menus}`);
      res.status(201).json(restaurant);
    }
  );
});

// ========= EXPORT MODULE ==========
module.exports = services;
