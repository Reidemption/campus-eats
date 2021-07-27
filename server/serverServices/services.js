const express = require("express");
const cors = require("cors");
const { Restaurants } = require("./FrontEnd_Object_Models/restaurant.js");
const BLOModules = require("../serverServices/businessLogic/BLL/bllModules");
const BLOModels = require("../serverServices/businessLogic/models/data_models");
const services = express();
const main_path = "/campuseats";

// ========== Middlewares ===========
services.use(cors());
services.use(express.json({}));
services.use(express.static("admin_test_pages"));

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
    "- Headers:",
    req.headers,
    "- Body:",
    req.body
  ),
    next();
});
// Lines 39-313 GET + POST
// Lines 315-XX DELETE
// Lines XX-XX PATCH

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
services.get("/feed/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
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

// POST/create Hours for a restaurant
services.post("/hours", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`Adding hours to a restaurant with body: `);
  console.log(req.body);
  // if (
  //   !req.body.date ||
  //   !req.body.open ||
  //   !req.body.close ||
  //   req.body.restaurant_id
  // ) {
  //   console.log(`unable to add hours because fields are missing`);
  //   res.status(400).json({
  //     message: "unable to add hours",
  //     error: "field is missing",
  //   });
  //   return;
  // }
  let newHours = {
    date: req.body.date,
    open: req.body.open,
    close: req.body.close,
    restaurant_id: req.body.restaurant_id,
  };
  Restaurants.findByIdAndUpdate(
    req.body.restaurant_id,
    { $push: { hours: newHours } },
    { new: true },
    (err, restaurant) => {
      if (err) {
        console.log(`unable to add hours`);
        res.status(500).json({
          message: "unable to add hours",
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
      console.log(restaurant.hours);
      res.status(201).json(restaurant.hours[restaurant.hours.length - 1]);
    }
  );
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
    note: req.body.note,
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

// delete a Restaurant using its id
services.delete("/restaurant/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(`Deleting restaurant with id: ${req.body.id}`, req.body);
  Restaurants.findByIdAndDelete(req.params.id, (err, restaurant) => {
    if (err != null) {
      res.status(500).json({
        err: err,
        message: "Unable to find restaurant with that id",
      });
      return;
    } else if (restaurant === null) {
      res
        .status(404)
        .json({ message: `unable to find restaurant to delete`, error: err });
      return;
    }
    res.status(200).json(restaurant);
  });
});

// delete a category with a specific id
services.delete("/category/:restaurant_id/:category_id", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(
    `Deleting a category with restaurant id: ${req.params.restaurant_id} and category id: ${req.params.category_id}`,
    req.body
  );
  Restaurants.findByIdAndUpdate(
    req.params.restaurant_id,
    {
      $pull: {
        categories: {
          _id: req.params.category_id,
        },
      },
    },
    (err, restaurant) => {
      if (err != null) {
        res.status(500).json({
          err: error,
          message: "Unable to find category with that id",
        });
        return;
      } else if (restaurant === null) {
        res
          .status(404)
          .json({ message: `unable to find category to delete`, error: err });
        return;
      }
      let category;
      restaurant.categories.forEach((e) => {
        if (e._id == req.params.category_id) {
          category = e;
        }
      });
      if (restaurant == undefined) {
        res.status(404).json({
          error: err,
          message: "could not find restaurant",
        });
        return;
      }
      res.status(200).json(restaurant);
    }
  );
});

// Delete a menu
services.delete(
  "/menu/:restaurant_id/:category_id/:menu_id",
  function (req, res) {
    res.setHeader("Content-Type", "application/json");
    console.log(
      `Deleting a menu with restaurant id: ${req.params.restaurant_id} and category id: ${req.params.category_id} and menu_id ${req.params.menu_id}`,
      req.body
    );
    Restaurants.findByIdAndUpdate(
      {
        _id: req.body.restaurant_id,
        "categories._id": req.body.category_id,
      },
      {
        $pull: {
          menus: { "categories.$.menus": newMenu },
        },
      },
      { new: true },
      (err, restaurant) => {
        if (err != null) {
          res.status(500).json({
            err: error,
            message: "Unable to find menu with that id",
          });
          return;
        } else if (restaurant === null) {
          res
            .status(404)
            .json({ message: `unable to find menu to delete`, error: err });
          return;
        }
        let menu;
        restaurant.categories.menus.forEach((e) => {
          if (e._id == req.params.menu_id) {
            menu = e;
          }
        });
        if (restaurant == undefined) {
          res.status(404).json({
            error: err,
            message: "could not find restaurant",
          });
          return;
        }
        res.status(200).json(restaurant);
      }
    );
  }
);

// Delete a custom_option
services.delete(
  "/customization/:restaurant_id/:category_id/:menu_id/:custom_id",
  function (req, res) {
    res.setHeader("Content-Type", "application/json");
    console.log(`creating a customization with a body:`);

    Restaurants.findOneAndUpdate(
      {
        _id: req.body.restaurant_id,
        "categories._id": req.body.category_id,
        "categories.menus._id": req.body.menu_id,
      },
      {
        $pull: {
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
          console.log(`unable to delete custom option error 500`);
          res.status(500).json({
            message: "unable to delete custom option",
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
        res.status(201).json(restaurant);
      }
    );
  }
);

// Patch - update
services.patch("/customization/:custom_id", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`Patching id: ${req.params.custom_id}`, req.body);
  let updateCustomization = {};
  if (req.body.selected) {
    updateCustomization.selected = req.body.selected;
  }

  Restaurants.updateOne(
    { _id: req.params.custom_id },
    {
      $set: updateCustomization,
    },
    function (err, updateOneResponse) {
      if (err) {
        console.log(`unable to PATCH with id: ${req.params.id}`);
        res.status(404).json({
          message: `unable to update customization with id ${req.params.id}`,
          error: err,
        });
      } else if (updateOneResponse.n) {
        res.status(200).json(updateCustomization);
      }
      return;
    }
  );
});

// -------------- Duy's Section ------------------

// Get every users
services.get("/users", (req, res) => {
  console.log(`Getting all User`);
  BLOModules.UserBLO.getAllUsers((err, users) => {
    if (err != null) {
      res.status(500).json({
        Error: err,
        message: "unable to list all users",
      });
    } else {
      res.status(200).json(users);
    }
  });
});

// Get info for a user with specific ID
services.get("/users/:id", (req, res) => {
  console.log(`Getting specific user with id:${req.params.id}`);
  BLOModules.UserBLO.findUserById(req.params.id, (err, user) => {
    if (err != null) {
      res.status(500).json({
        err: err,
        message: "Unable to find user with that id",
      });
    } else if (user === null) {
      res.status(404).json({
        message: `Cannot find user with id: ${req.params.id}`,
      });
    } else {
      res.status(200).json(user);
    }
  });
});

// POST/create a user
services.post("/users", function (req, res) {
  let userInfoObj = new BLOModels.UserInfoModel({});
  userInfoObj.dnumber = req.body.dnumber;
  userInfoObj.firstname = req.body.firstname;
  userInfoObj.lastname = req.body.lastname;
  userInfoObj.contacts = {
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
  };
  let userObj = new BLOModels.UserModel({});
  userObj.email = req.body.email;
  userObj.hashed_password = req.body.password;
  userObj.location = req.body.location;
  userObj.user_info = userInfoObj;
  let isValid = userObj.validateSync();
  if (isValid !== undefined) {
    console.log(isValid);
    res.status(400).json({
      message: "Fields are invalid",
      isValid,
    });
  } else {
    BLOModules.UserBLO.createUser(userObj, (err, user) => {
      if (err !== null) {
        res.status(500).json({
          message: "=> Unable to create user",
          error: err,
        });
      } else {
        res.status(200).json(user);
      }
    });
  }
});

// PUT/update a user
services.put("/users", function (req, res) {
  console.log(req.body);
  if (
    !req.body.username ||
    !req.body.firstname ||
    !req.body.lastname ||
    !req.body.password ||
    !req.body.phone ||
    !req.body.dnumber
  ) {
    console.log(`unable to update user because fields are missing`);
    res.status(400).json({
      message: "unable to update user",
      error: "Field is missing",
    });
    return;
  }

  BLOModules.UserBLO.updateUser(new BLOModels.UserModel({}), (err, user) => {
    if (err !== null) {
      res.status(400).json({
        message: "unable to create user",
        error: err,
      });
    } else {
      console.log(user);
      res.status(201).json(user);
    }
  });
});

// DELETE/delete a user
services.delete("/users/:id", function (req, res) {
  console.log(`Delete with id : ${req.params.id}`);
  BLOModules.UserBLO.deleteUser(req.params.id, (err, user) => {
    if (err !== null) {
      res.status(400).json({
        message: "unable to delete user",
        error: err,
      });
    } else {
      console.log(user);
      res.status(201).json(user);
    }
  });
});

// ========= ERROR HANDLER ==========
services.use((req, res, next) => {
  if (req.headers.error != undefined) {
    console.log(`-------------------- ERROR ---------------------`);
    console.log(`- ${Date.now()}`);
    console.log(`--- Error: ${err}`);
    console.log(`------------------------------------------------`);
  }
  // res.status(req.headers.status).json(req.headers.message);
});
// ========= EXPORT MODULE ==========
module.exports = services;
