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

// Error in Brook's Stop formatting according to mySQL.
// Inserts all the restaurants
services.get("/in/restaurants", (req, res) => {
  let sql =
    "INSERT INTO `restaurants` VALUES (1,'Chick-fil-A','Eat Mor Chikin at Dixie State University!  Located in the Trailblazer Cafe, offering both original and grilled Chick-fil-A classics.','Gardner Building','url'),(2,'Pizza Hut','No one outpizzas the Hut.  Also serving pasta, wings, and bread/pretzel bites!','Gardner Building','url'),(3,'Ace Sushi','Offering a variety of sushi options available at various locations on campus.','Gardner Building','url'),(4,'Subway','Offering a variety of sandwich options that you can experience at any other Subway.','Gardner Building','url'),(5,'The Market','The Market at Dixie, located on the first floor of the Gardner Student Center, is more than just a convenience store. It’s a place where friends can meet, do homework, be tutored or just eat a snack or two while studying.','Gardner Building','url'),(7,'Stacks','Our campus sandwich shop also offers wraps, salads, paninis, and soup!  Not to mention our famous s’mores cookie with ice cream.','2nd Floor Holland Building','url'),(8,'Infusion','Not only do we serve beverages, but we also serve Starbucks coffees, teas, freshly squeezed orange juice, hot toasted bagels, muffins, donuts, and other snacks.','1st Floor Holland Building','url'),(9,'Grazers','Located in the Human Performance Center we offer a variety of toasts! NEW this fall we are introducing B-Fruity who will offer acai bowls, smoothies, protein shakes, fresh pressed juices, parfaits, and more!','HPC','url');";
  let query = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

services.get("/in/menus", (req, res) => {
  let sql =
    "INSERT INTO `menus` VALUES (1,1,'Original Meals','Long time favorites that anyone would enjoy!','url'),(2,1,'Grilled Meals','Choices under 350 calories!','url'),(3,2,'9 inch Hand Tossed Pizza','4 Slices per pizza | Calories Listed by Slice','url'),(4,2,'Pasta',' ','url'),(5,2,'Snacks',' ','url'),(6,5,'Food and Drinks',' ','url'),(7,4,'Subway Heroes',' ','url'),(8,4,'Fan Faves',' ','url'),(9,4,'Sides',' ','url'),(10,6,'Breakfast',' ','url'),(11,6,'Entrées',' ','url'),(12,6,'Brooks Stop Sides',' ','url'),(13,6,'Hot Drinks',' ','url'),(14,6,'Cold Beverages',' ','url'),(15,6,'Frappuccino',' ','url'),(16,7,'Dessert',' ','url'),(17,7,'Beverages',' ','url'),(18,7,'Classic Sandwiches','Honey Wheat, White, Sourdough, or French Baguette','url'),(19,7,'Panini',' ','url'),(20,7,'Salad',' ','url'),(21,7,'Wraps','All wraps are served on a Sundried Tomato Wrap.','url'),(22,8,'Hot Drinks',' ','url'),(23,8,'Cold Beverages',' ','url'),(24,8,'Frappuccino Blended Beverages',' ','url'),(25,9,'Acai Bowls',' ','url'),(26,9,'Fruit Bowls',' ','url'),(27,9,'Protein Shakes',' ','url'),(28,9,'Smoothies',' ','url'),(29,9,'Parfait',' ','url'),(30,9,'Juices',' ','url');";
  let query = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

// //  Get Menu information
// services.get("/Restaurant/?menu=:name", (req, res) => {
//   let sql = `SELECT * FROM restaurants WHERE name='${req.params.name}'`;
//   let query = database.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(`Getting restaurant with name: ${result}`);
//     res.status(200).send(result);
//   });
// });

// ========= EXPORT MODULE ==========
module.exports = services;
