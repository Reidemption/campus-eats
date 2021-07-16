const express = require("express");
const cors = require("cors");
const services = express();
const { connection } = require("../dataAccessLayer/DAO");

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
//  Get Restaurant name
services.get("/restaurant/", (req, res) => {
  let sql = `SELECT * FROM restaurants`;
  let data = connection.query(sql, (err, result) => {
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
  let query = connection.query(sql, (err, result) => {
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
