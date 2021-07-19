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

<<<<<<< HEAD
services.get("/hello", (req, res) => {
  res.status(200).json({});
});

=======
>>>>>>> backend
//  Get Restaurant name
services.get("/restaurant/", (req, res) => {
  let sql = `SELECT * FROM restaurants`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
<<<<<<< HEAD
    res.status(200).send(result);
  });
});

//  Get Menus
services.get("/menus/", (req, res) => {
  let sql = `SELECT * FROM menus`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get Meals
services.get("/meals/", (req, res) => {
  let sql = `SELECT * FROM meals`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get specific Restaurants
services.get("/restaurants/", (req, res) => {
  let sql = `SELECT * FROM restaurants`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get specific Menus
services.get("/menus/", (req, res) => {
  let sql = `SELECT * FROM menus`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get specific Meals
services.get("/meals/", (req, res) => {
  let sql = `SELECT * FROM meals`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

<<<<<<< HEAD
=======
// Error in Brook's Stop formatting according to mySQL.
// Inserts all the restaurants
services.get("/in/restaurants", (req, res) => {
  let sql =
    "INSERT INTO `restaurants` VALUES (1,'Chick-fil-A','Eat Mor Chikin at Dixie State University!  Located in the Trailblazer Cafe, offering both original and grilled Chick-fil-A classics.','Gardner Building','url'),(2,'Pizza Hut','No one outpizzas the Hut.  Also serving pasta, wings, and bread/pretzel bites!','Gardner Building','url'),(3,'Ace Sushi','Offering a variety of sushi options available at various locations on campus.','Gardner Building','url'),(4,'Subway','Offering a variety of sandwich options that you can experience at any other Subway.','Gardner Building','url'),(5,'The Market','The Market at Dixie, located on the first floor of the Gardner Student Center, is more than just a convenience store. It’s a place where friends can meet, do homework, be tutored or just eat a snack or two while studying.','Gardner Building','url'),(6,'Brooks Stop','Located near the bulk of student housing, Brooks’ Stop provides a wide selection of breakfast, lunch, and dinner for students on the go.','Next to Campus View','url'),(7,'Stacks','Our campus sandwich shop also offers wraps, salads, paninis, and soup!  Not to mention our famous s’mores cookie with ice cream.','2nd Floor Holland Building','url'),(8,'Infusion','Not only do we serve beverages, but we also serve Starbucks coffees, teas, freshly squeezed orange juice, hot toasted bagels, muffins, donuts, and other snacks.','1st Floor Holland Building','url'),(9,'Grazers','Located in the Human Performance Center we offer a variety of toasts! NEW this fall we are introducing B-Fruity who will offer acai bowls, smoothies, protein shakes, fresh pressed juices, parfaits, and more!','HPC','url');";
  let query = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
=======
>>>>>>> backend
    res.status(200).send(result);
  });
});

//  Get Menus
services.get("/menus/", (req, res) => {
  let sql = `SELECT * FROM menus`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get Meals
services.get("/meals/", (req, res) => {
  let sql = `SELECT * FROM meals`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

>>>>>>> a57f1e1174b23e11c523b81ccfbafb9c4f9d24f8
// ========= EXPORT MODULE ==========
module.exports = services;
